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
    title: 'Projects',
    href: `${BASE_URL}/projects`,
  },
  {
    title: 'Contact',
    href: `${BASE_URL}/contact`,
  },
];
