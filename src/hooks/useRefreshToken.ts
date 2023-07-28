'use client';
import { useEffect, useCallback } from 'react';
import authStore from '@/store/authStore';
import { shallow } from 'zustand/shallow';
import { apiPrivate } from '@/lib/api/config';
import { getTokenByRefresh } from '@/lib/api/token';
import { StatusToken } from '@/assets/status';

const useRefreshToken = () => {
  const { accessToken, setAccessToken } = authStore(
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
    } catch (err) {
      //액세스 토큰 발급 실패에 따라 상태 업데이트
      setAccessToken(StatusToken.No_token);
    }
  }, []);

  useEffect(() => {
    const responseIntercept = apiPrivate.interceptors.response.use(
      (response) => {
        //만약 응답받은 데이터에서 accessToken키가 있으면 전역 변수 설정
        if (response.data && response.data.accessToken) {
          setAccessToken(response.data.accessToken);
        }

        return response;
      },
    );

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

    //액세스 토큰 재발급 후 user정보 업데이트
    if (!accessToken) {
      resetLoginedUserInfo();
    }

    return () => {
      apiPrivate.interceptors.request.eject(requestIntercept);
      apiPrivate.interceptors.request.eject(responseIntercept);
    };
  }, []);

  return accessToken;
};

export default useRefreshToken;

// async (error: AxiosError) => {
//   if ((error?.response?.status as number) >= 400) {
//     try {
//       newAccessToken = await getTokenByRefresh();
//       setAccessToken(newAccessToken);
//     } catch (err) {
//       alert('다시 시도해 주세요');
//       return;
//     }
//   }
//   return Promise.reject(error);
// },
