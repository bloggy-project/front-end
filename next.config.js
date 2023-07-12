/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  }, //dev 브랜치 빌드까지는 eslint 무시
  reactStrictMode: false,
  swcMinify: true, //swc 빌드 툴 사용 옵션
  compiler: {
    styledComponents: true,
    //최종 빌드 주석 해제
    // removeConsole: {
    //   //콘솔 호출 제거
    //   exclude: ['error'], //error 관련 콘솔은 출력
    // },
  },
  async rewrites() {
    return [
      {
        source: '/:path*', //api request path
        destination: `https://bloggy.kro.kr/api/:path*`, //목적 path
      },
    ];
  },
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    domains: [
      'thumb.mt.co.kr',
      'img4.daumcdn.net',
      'dzbnjlxurlvs4.cloudfront.net',
    ],
  },
};

module.exports = nextConfig;
