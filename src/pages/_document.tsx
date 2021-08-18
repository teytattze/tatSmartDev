import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" className="dark">
        <Head />
        <body className="outline-none focus:outline-none dark:text-offwhite dark:bg-darkergrey">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
