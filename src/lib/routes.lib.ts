export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;

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

export const checkActiveRoute = (current: string, href: string) => {
  const currentBase = current.split('/')[1];
  const linkHref = href.replace(BASE_URL, '').split('/')[1];

  if (currentBase === linkHref) {
    return true;
  }
  return false;
};
