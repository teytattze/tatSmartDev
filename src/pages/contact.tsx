import { NextSeo } from 'next-seo';
import { Page } from 'src/components/page';
import { PersonalContact } from 'src/modules/personal';

function ContactPage() {
  return (
    <>
      <NextSeo
        title="tatSmartDev - Contact"
        description="A page which contains a contact form and some contact details."
      />
      <Page title="Get in Touch" subtitle="Feel free to contact me anytimes">
        <PersonalContact />
      </Page>
    </>
  );
}

export default ContactPage;
