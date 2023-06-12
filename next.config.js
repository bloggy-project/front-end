/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, //swc 빌드 툴 사용 옵션
  compiler: {
    styledComponents: true,
    removeConsole: {//콘솔 호출 제거
      exclude: ['error'],//error 관련 콘솔은 출력
    },
    
  },
};

module.exports = nextConfig;
