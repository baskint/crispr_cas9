import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import './styles.css';
import GlobalStyle from '../components/globalStyle';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>CRISPR * Cas9</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
