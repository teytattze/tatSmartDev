import '../styles/globals.css';
import * as React from 'react';
import { NextSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { Layout } from '../components/layout';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <NextSeo
        defaultTitle="tatSmartDev"
        description="This is my personal website which includes some of my information."
        canonical="https://www.tatsmartdev.com"
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'fullstack web developer, mobile development, software engineer, freelancer',
          },
          {
            name: 'author',
            content: 'Tat Tze Tey',
          },
        ]}
      />
      <Layout route={router.route}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
