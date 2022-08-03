import type { AppProps } from 'next/app';
import styled from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import { RecoilDevTools } from 'recoil-gear';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import setupMSW from '../api/setup';
import GlobalStyle from '../styles/GlobalStyle';
import Layout from '../components/Layout/Layout';

setupMSW();

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <>
      <RecoilRoot>
        <RecoilDevTools />
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Background />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;

const Background = styled.div`
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: #f0f0f5;
`;
