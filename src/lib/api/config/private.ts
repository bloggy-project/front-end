import axios from 'axios';

axios.defaults.withCredentials = true;

export let accessToken = '';

export const apiPrivate = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiPrivate.interceptors.response.use(
  (response) => {
    //만약 응답받은 데이터에서 accessToken키가 있으면 전역 변수 설정
    if (response.data && response.data.accessToken) {
      accessToken = response.data.accessToken;
      console.log('access', accessToken);
    }

    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Access 토큰을 헤더에 넣어 보내야 되는 요청이 필요한 경우 사용
apiPrivate.interceptors.request.use(
  (config) => {
    // Check if the request requires a token
    if (accessToken && config.headers) {
      // Add the access token to the request headers
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  },
);
