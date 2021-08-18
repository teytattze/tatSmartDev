import { NextSeo } from 'next-seo';
import { Container } from 'src/components/container';
import { Divider } from 'src/components/divider';
import { useWindowDimensions } from 'src/shared/hooks/use-window-dimensions';

function ErrorPage() {
  const { height } = useWindowDimensions();
  return (
    <>
      <NextSeo
        title="tatSmartDev - 404"
        description="Error 404. Page not found."
      />
      <section
        className="relative w-full select-none shadow-xl"
        style={{ height: `${height}px` }}
      >
        <Container className="h-full flex flex-col items-center justify-center">
          <h1 className="typography-h1 uppercase">Error 404</h1>
          <Divider className="w-20 h-1 mt-4 mb-8" color="primary" />
          <h2 className="typography-h2 text-primary">Page Not Found</h2>
        </Container>
      </section>
    </>
  );
}

export default ErrorPage;
