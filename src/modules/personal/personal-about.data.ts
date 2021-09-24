import * as React from 'react';
import {
  AcademicCapIcon,
  CodeIcon,
  CubeTransparentIcon,
  DesktopComputerIcon,
  DeviceMobileIcon,
  SupportIcon,
} from '@heroicons/react/solid';
import {
  PERSONAL_AGE,
  PERSONAL_EMAIL,
  PERSONAL_FULLNAME,
  PERSONAL_LOCATION,
} from './personal.const';

export interface IAboutDesc {
  title: string;
  desc: string;
}

export const aboutDesc: IAboutDesc = {
  title:
    "I'm Liam Tat Tze Tey, a Software Engineer and Fullstack Web Developer",
  desc: "I was born in Malaysia, but I'm living in London, UK. In the past two years, I have been learning web and mobile app development, which comply with the latest trends and technologies. I provide the solution to help businesses or individuals by converting their vision and ideas into applications. Feel free to DM me for further equiries!",
};

export interface IAboutPersonal {
  title: string;
  content: string;
}

export const aboutPersonal: IAboutPersonal[] = [
  {
    title: 'Name',
    content: PERSONAL_FULLNAME,
  },
  {
    title: 'Age',
    content: PERSONAL_AGE,
  },
  {
    title: 'From',
    content: PERSONAL_LOCATION,
  },
  {
    title: 'Email',
    content: PERSONAL_EMAIL,
  },
];

export interface IAboutService {
  Icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
  title: string;
  content: string;
}

export const aboutServices: IAboutService[] = [
  {
    title: 'Web Development',
    content: 'Build a web app to grow and improve your business.',
    Icon: DesktopComputerIcon,
  },
  {
    title: 'Fully Responsive',
    content: 'A fully responsive web app which support mobile devices.',
    Icon: DeviceMobileIcon,
  },
  {
    title: 'Highly Customizable',
    content: 'A highly customizable web app to meet the requirements.',
    Icon: CodeIcon,
  },
  {
    title: 'Branding',
    content: 'Improve your brand images with a simple web application.',
    Icon: CubeTransparentIcon,
  },
  {
    title: 'Support',
    content: 'Provide technical support which are related to web app.',
    Icon: SupportIcon,
  },
  {
    title: 'Mentoring',
    content: 'A personalize guidances to improve you web development skills.',
    Icon: AcademicCapIcon,
  },
];
