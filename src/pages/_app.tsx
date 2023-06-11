import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          {/*
          name=viewport 브라우저가 웹 페이지를 렌더링 할 때 동작하는 방법을 알려주고 뷰포트의 크기를 알려줌
          width=device-width부분은 장치의 화면 너비를 따르도록 페이지 너비를 설정
          initial-scale=1.0부분은 브라우저에서 페이지를 처음로드 할 때 초기 확대 / 축소 수준을 설정
           */}
        </Head>
        <Component {...pageProps} />
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
