import { BASE_URL } from './config.const';

export interface IRoute {
  title: string;
  href: string;
}

export const routes: IRoute[] = [
  {
    title: 'Home',
    href: `${BASE_URL}/`,
  },
  {
    title: 'About',
    href: `${BASE_URL}/about`,
  },
  {
    title: 'Resume',
    href: `${BASE_URL}/resume`,
  },
  {
    title: 'Portfolio',
    href: `${BASE_URL}/portfolio`,
  },
  {
    title: 'Contact',
    href: `${BASE_URL}/contact`,
  },
  // {
  //   title: 'Blog',
  //   href: `${BASE_URL}/blog`,
  // },
];
