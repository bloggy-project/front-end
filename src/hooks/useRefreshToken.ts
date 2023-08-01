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
    }),
    shallow,
  );

  const resetAccessToken = useCallback(async () => {
    try {
      const newAccessToken = await getTokenByRefresh();
      setAccessToken(newAccessToken);
    } catch (err) {
      //액세스 토큰 발급 실패에 따라 상태 업데이트
      setAccessToken(StatusToken.No_token);
    }
  }, []);

  useEffect(() => {
    let requestIntercept = apiPrivate.interceptors.request.use();
    const responseIntercept = apiPrivate.interceptors.response.use(
      (response) => {
        //만약 응답받은 데이터에서 accessToken키가 있으면 전역 변수 설정
        if (response.data && response.data.accessToken) {
          setAccessToken(response.data.accessToken);
        }

        return response;
      },
    );

    if (
      accessToken !== StatusToken.No_token &&
      accessToken !== StatusToken.Initial
    ) {
      requestIntercept = apiPrivate.interceptors.request.use(
        async (config) => {
          if (accessToken && config.headers) {
            config.headers.Authorization = `Bearer ${accessToken}`;
          }
          return config;
        },
        (error) => {
          return Promise.reject(error);
        },
      );
    } else if (!accessToken) {
      resetAccessToken();
    }

    return () => {
      apiPrivate.interceptors.request.eject(requestIntercept);
      apiPrivate.interceptors.request.eject(responseIntercept);
    };
  }, [accessToken]);

  return accessToken;
};

export default useRefreshToken;
