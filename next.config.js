/** @type {import('next').NextConfig} */
const nextConfig = {
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
        destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`, //목적 path
      },
    ];
  },
  images: {
    domains: [
      'thumb.mt.co.kr',
      'img4.daumcdn.net',
      'dzbnjlxurlvs4.cloudfront.net',
    ],
  },
};

module.exports = nextConfig;
