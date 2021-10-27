import { css } from '@emotion/react';
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

const bodyStyles = css`
  -webkit-tap-highlight-color: transparent;

  &::-moz-selection {
    background-color: rgba(251, 191, 36, 0.5);
  }
  &::selection {
    background-color: rgba(251, 191, 36, 0.5);
  }
`;

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" className="dark">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@600&family=Poppins:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body
          className="focus:outline-none text-offwhite bg-darkergrey"
          css={bodyStyles}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
