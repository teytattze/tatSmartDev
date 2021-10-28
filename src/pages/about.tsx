import { NextSeo } from 'next-seo';
import Image from 'next/image';
import { Button } from '../components/button';
import { Divider } from '../components/divider';
import { Page } from '../components/page';
import { Section } from '../components/section';
import { SocialIcons } from '../components/social-icons';
import { details } from '../data/personal/details.data';
import { introduction } from '../data/personal/introduction.data';
import { skills } from '../data/skills.data';
import { BASE_URL } from '../shared/consts/config.const';

function AboutPage() {
  return (
    <>
      <NextSeo
        title="tatSmartDev - About"
        description="A page which shows my personal information and services."
      />
      <Page title="About Me" subtitle="Get to know me">
        <Section>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="relative rounded-full h-64 w-64 sm:h-80 sm:w-80 overflow-hidden justify-self-center md:w-full md:h-full md:rounded md:col-span-5 xl:col-span-4">
              <Image
                priority
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                src="/images/me.jpg"
                alt="Personal profile image"
              />
            </div>
            <div className="space-y-12 md:p-4 md:col-span-7 xl:col-span-8">
              <div className="space-y-4">
                <h1 className="typography-h5 text-primary">Who am I?</h1>
                <h2 className="typography-h3 leading-title">
                  {introduction.title}
                </h2>
                <p className="typography-p typography-secondary leading-paragraph">
                  {introduction.desc}
                </p>
              </div>
              <Divider className="w-full h-0.5" color="secondary" />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {details.map((detail) => (
                  <div key={detail.title} className="flex space-x-4">
                    <h1 className="typography-p col-span-2">
                      {detail.title} :
                    </h1>
                    <p className="typography-p typography-secondary col-span-9">
                      {detail.content}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col space-y-8 items-start lg:items-center lg:flex-row lg:space-x-4 lg:space-y-0">
                <Button
                  variant="contained"
                  aria-label="Download CV"
                  render={(renderProps) => (
                    <a href={`${BASE_URL}/CV.pdf`} download {...renderProps} />
                  )}
                >
                  Download CV
                </Button>
                <div className="flex items-center space-x-4">
                  <Divider className="w-8 md:w-16 h-0.5" color="secondary" />
                  <div className="flex space-x-4">
                    <SocialIcons />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section title="My Skills" subtitle="Technologies that I used">
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xs:gap-4 sm:gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center space-y-2"
              >
                <div className="w-full p-6">
                  <Image
                    src={skill.imageUrl}
                    alt={skill.title}
                    layout="responsive"
                    width="24"
                    height="24"
                  />
                </div>
                <p className="typography-p typography-secondary leading-desc">
                  {skill.title}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </Page>
    </>
  );
}

export default AboutPage;
