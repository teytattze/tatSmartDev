import Image from 'next/image';
import { Button } from 'src/components/button';
import { Divider } from 'src/components/divider';
import { Section } from 'src/components/section';
import { SocialIcons } from 'src/components/social-icons';
import { BASE_URL } from 'src/shared/consts/config.const';
import {
  aboutDesc,
  aboutPersonal,
  aboutServices,
} from '../personal-about.data';

export function PersonalAbout() {
  return (
    <>
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
              <h2 className="typography-h3 leading-title">{aboutDesc.title}</h2>
              <p className="typography-p typography-secondary leading-paragraph">
                {aboutDesc.desc}
              </p>
            </div>
            <Divider className="w-full h-0.5" color="secondary" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {aboutPersonal.map((personalInfo) => (
                <div key={personalInfo.title} className="flex space-x-4">
                  <h1 className="typography-p col-span-2">
                    {personalInfo.title} :
                  </h1>
                  <p className="typography-p typography-secondary col-span-9">
                    {personalInfo.content}
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
      <Section title="My Services" subtitle="Services I offer to my clients">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutServices.map((service) => (
            <div
              key={service.title}
              className="flex flex-col space-y-4 w-full bg-darkgrey p-8 rounded"
            >
              <service.Icon className="w-12 h-12 text-primary" />
              <h1 className="typography-h5 leading-title">{service.title}</h1>
              <Divider className="w-12 h-0.5" color="primary" />
              <p className="typography-p typography-secondary leading-desc">
                {service.content}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
