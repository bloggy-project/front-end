import { useEffect, useCallback, useState } from 'react';
import authStore from '@/store/authStore';
import { shallow } from 'zustand/shallow';
import { apiPrivate } from '@/lib/api/config';
import { AxiosError } from 'axios';
import { getTokenByRefresh } from '@/lib/api/token';
import onTest from '@/lib/api/testApi';
import { getLocalStorage } from '@/lib/handler/handleUserInfo';

const useRefreshToken = () => {
  const { accessToken, setAccessToken, setUserInfo } = authStore(
    (state) => ({
      accessToken: state.accessToken,
      setAccessToken: state.setAccessToken,
      setUserInfo: state.setUserInfo,
    }),
    shallow,
  );

  let newAccessToken: string | null = null;

  const resetLoginedUserInfo = useCallback(async () => {
    try {
      newAccessToken = await getTokenByRefresh();
      setAccessToken(newAccessToken);
      if (newAccessToken) {
        const userInfo = await onTest();
        setUserInfo(userInfo);
      }
    } catch (err) {
      alert('로그인을 다시 시도해주세요');
    }
  }, []);

  useEffect(() => {
    const requestIntercept = apiPrivate.interceptors.request.use(
      async (config) => {
        if (newAccessToken && config.headers) {
          config.headers.Authorization = `Bearer ${newAccessToken}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    const responseIntercept = apiPrivate.interceptors.response.use(
      (response) => {
        //만약 응답받은 데이터에서 accessToken키가 있으면 전역 변수 설정
        if (response.data && response.data.accessToken) {
          setAccessToken(response.data.accessToken);
        }

        return response;
      },
      async (error: AxiosError) => {
        //나중에 status는 토큰 에러 관련 번호 알아내서 재정의
        if ((error?.response?.status as number) >= 400) {
          try {
            newAccessToken = await getTokenByRefresh();
            setAccessToken(newAccessToken);
          } catch (err) {
            alert('다시 시도해 주세요');
          }
        }
        return Promise.reject(error);
      },
    );

    //새로고침 시 localStorage에 'userinfo'가 있으면 로그인 유지 중인 것으로 간주
    //액세스 토큰 재발급 후 user정보 업데이트
    resetLoginedUserInfo();

    return () => {
      apiPrivate.interceptors.request.eject(requestIntercept);
      apiPrivate.interceptors.request.eject(responseIntercept);
    };
  }, [getLocalStorage('userinfo')]);
};

export default useRefreshToken;
