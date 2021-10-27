import { BASE_URL } from '../shared/consts/config.const';

export const checkActivePath = (current: string, href: string) => {
  const currentBase = current.split('/')[1];
  const linkHref = href.replace(BASE_URL, '').split('/')[1];

  if (currentBase === linkHref) {
    return true;
  }
  return false;
};
