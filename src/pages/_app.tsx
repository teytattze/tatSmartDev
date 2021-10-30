import '../styles/globals.css';
import { NextSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { DefaultLayout } from '../layouts/default.layout';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <NextSeo
        title="tatSmartDev"
        defaultTitle="tatSmartDev"
        description="This is my personal website which includes my information."
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
      <DefaultLayout route={router.route}>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  );
}

export default MyApp;
