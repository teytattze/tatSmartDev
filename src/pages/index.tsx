import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Typewriter from 'typewriter-effect';
import { Container } from '../components/container';
import { Divider } from '../components/divider';
import { NonScrollableLayout } from '../layouts/non-scrollable.layout';
import { SocialIcons } from '../components/social-icons';

const HomePage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="tatSmartDev - Home"
        description="A home page for my personal website. It includes navigation and social media links."
      />
      <NonScrollableLayout>
        <Container>
          <div className="relative h-full">
            <div className="h-full flex flex-col justify-center space-y-8 text-center">
              <h1 className="text-5xl text-white font-semibold tracking-wide uppercase md:text-7xl">
                Liam Tey
              </h1>
              <div className="flex justify-center space-x-2 text-xl text-center sm:space-x-3 md:space-x-4 md:text-3xl">
                <h2 className="text-white">I am a</h2>
                <span className="text-primary">
                  <Typewriter
                    options={{
                      strings: [
                        'Software Engineer',
                        'Full Stack Engineer',
                        'Coding Mentor',
                      ],
                      loop: true,
                      autoStart: true,
                    }}
                  />
                </span>
              </div>
            </div>
            <footer className="absolute bottom-0 w-full pb-8 flex justify-center items-end md:justify-between">
              <div className="hidden items-center md:flex sm:space-x-4">
                <Divider className="w-8 h-0.5" color="primary" />
                <p className="typography-caption">Created by: Tey</p>
                <Divider className="w-16 h-0.5" color="primary" />
              </div>
              <div className="flex space-x-4 md:space-x-0 md:space-y-4 md:flex-col">
                <SocialIcons />
              </div>
            </footer>
          </div>
        </Container>
      </NonScrollableLayout>
    </>
  );
};

export default HomePage;
