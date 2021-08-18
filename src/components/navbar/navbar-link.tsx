import * as React from 'react';
import cx from 'clsx';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { checkActivePath } from 'src/lib/check-active-path.util';

export type NavbarLink = {
  title: string;
  href: string;
};

export function NavbarLink({ title, href }: NavbarLink) {
  const { asPath } = useRouter();
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    setActive(checkActivePath(asPath, href));
  }, [asPath, href]);

  return (
    <NextLink href={href} passHref>
      <a className="inline-block relative">
        <p
          className={cx(
            'text-sm uppercase font-medium tracking-wider cursor-pointer hover:text-primary focus:text-primary active:text-primary-dark before:absolute before:block before:w-0 before:h-0.5 before:rounded-full before:bg-primary before:transition-all before:ease-in-out before:duration-300 before:-bottom-0.5 hover:before:w-full focus:before:w-full active:before:bg-primary-dark',
            { 'before:w-full': active },
          )}
        >
          {title}
        </p>
      </a>
    </NextLink>
  );
}
