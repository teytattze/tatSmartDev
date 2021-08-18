import { NextSeo } from 'next-seo';
import { Page } from 'src/components/page';
import { PersonalAbout } from 'src/modules/personal';

function AboutPage() {
  return (
    <>
      <NextSeo
        title="tatSmartDev - About"
        description="A page which shows my personal information and services."
      />
      <Page title="About Me" subtitle="Get to know me">
        <PersonalAbout />
      </Page>
    </>
  );
}

export default AboutPage;
