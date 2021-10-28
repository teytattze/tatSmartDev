import * as React from 'react';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import { Container } from '../components/container';
import { Divider } from '../components/divider';
import { SocialIcons } from '../components/social-icons';
import { roles } from '../data/personal/job-roles.data';

function HomePage() {
  const [height, setHeight] = React.useState<number>();

  React.useEffect(() => {
    const screenHeight = window.innerHeight;
    setHeight(screenHeight);
  }, []);

  return (
    <>
      <NextSeo
        title="tatSmartDev - Home"
        description="A home page for my personal website. It includes navigation and social media links."
      />
      <section
        className="relative w-full select-none shadow-xl"
        style={{ height: `${height}px` }}
      >
        <Image
          priority
          className="z-[-1]"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          src="/images/home-bg.png"
          placeholder="blur"
          blurDataURL="/images/placeholder-img.png"
          alt="Home background"
        />
        <Container className="relative h-full">
          <div className="h-full flex flex-col justify-center space-y-8 text-center">
            <h1 className="text-5xl text-white font-semibold tracking-wide uppercase md:text-7xl">
              Tat Tze Tey
            </h1>
            <div className="flex justify-center space-x-2 text-xl text-center sm:space-x-3 md:space-x-4 md:text-3xl">
              <h2 className="text-white">I am a</h2>
              <span className="text-primary">
                <Typewriter
                  options={{
                    strings: roles,
                    autoStart: true,
                    loop: true,
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
        </Container>
      </section>
    </>
  );
}

export default HomePage;
