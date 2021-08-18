import { NextSeo } from 'next-seo';
import { Page } from 'src/components/page';
import { PersonalPortfolio } from 'src/modules/personal';

function PortfolioPage() {
  return (
    <>
      <NextSeo
        title="tatSmartDev - Portfolio"
        description="A page which showcases all of my personal projects."
      />
      <Page title="Portfolio" subtitle="Showcasing some of my best work">
        <PersonalPortfolio />
      </Page>
    </>
  );
}

export default PortfolioPage;
