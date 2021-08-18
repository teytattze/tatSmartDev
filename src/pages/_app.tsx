import '../styles/globals.css';
import * as React from 'react';
import { NextSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '../components/internals/theme.provider';
import { Layout } from '../components/layout';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <NextSeo
        title="tatSmartDev"
        description="This is my personal website which includes some of my information."
        canonical="https://tatSmartDev.com"
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'tatSmartDev, smartDev, smart developer, developer, web developer, web development, mobile developer, mobile development, software engineer, portfolio, mentor, mentoring',
          },
          {
            name: 'author',
            content: 'Tat Tze Tey',
          },
        ]}
      />
      <ThemeProvider>
        <Layout route={router.route}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
