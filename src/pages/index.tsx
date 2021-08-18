import { NextSeo } from 'next-seo';
import { PersonalHome } from '../modules/personal';

function HomePage() {
  return (
    <>
      <NextSeo
        title="tatSmartDev - Home"
        description="A home page for my personal website. It includes navigation and social media links."
      />
      <PersonalHome />
    </>
  );
}

export default HomePage;
