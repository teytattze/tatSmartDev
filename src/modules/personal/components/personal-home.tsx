import * as React from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import { Container } from 'src/components/container';
import { useWindowDimensions } from 'src/shared/hooks/use-window-dimensions';
import { SocialIcons } from 'src/components/social-icons';
import { Divider } from 'src/components/divider';

export function PersonalHome() {
  const { height } = useWindowDimensions();

  return (
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
          <h1 className="text-5xl text-offwhite font-semibold tracking-wide uppercase md:text-7xl">
            Tat Tze Tey
          </h1>
          <div className="flex justify-center space-x-2 text-xl text-center sm:space-x-3 md:space-x-4 md:text-3xl">
            <h2 className="text-offwhite">I am a</h2>
            <span className="text-primary">
              <Typewriter
                options={{
                  strings: [
                    'Software Engineer',
                    'Web Developer',
                    'Mobile Developer',
                    'Freelancer',
                    'Coding Mentor',
                  ],
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
  );
}
