import * as React from 'react';
import cx from 'clsx';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { checkActivePath } from 'src/lib/check-active-path.util';

export type NavbarMenuButtonProps = {
  href: string;
  title: string;
};

export function NavbarMenuButton({ href, title }: NavbarMenuButtonProps) {
  const { asPath } = useRouter();
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    setActive(checkActivePath(asPath, href));
  }, [asPath, href]);

  return (
    <NextLink href={href} passHref>
      <a
        className={cx(
          'inline-block w-full py-2 px-4 typography-button hover:bg-darkergrey/40 focus:outline-none focus:bg-darkergrey/40 active:bg-darkergrey/60 active:text-primary',
          { 'text-primary': active },
        )}
        aria-label={title}
      >
        {title}
      </a>
    </NextLink>
  );
}
