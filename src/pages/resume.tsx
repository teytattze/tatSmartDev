import { NextSeo } from 'next-seo';
import { Page } from 'src/components/page';
import { PersonalResume } from 'src/modules/personal';

function ResumePage() {
  return (
    <>
      <NextSeo
        title="tatSmartDev - Resume"
        description="A page which shows my educations level, working experiences, and skills."
      />
      <Page title="Resume" subtitle="Check out my Resume">
        <PersonalResume />
      </Page>
    </>
  );
}

export default ResumePage;
