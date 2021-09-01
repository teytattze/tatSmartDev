import { css } from '@emotion/react';
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

const bodyStyles = css`
  ::-moz-selection {
    background: #fde68a;
  }
  ::selection {
    background: #fde68a;
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
        <Head />
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
