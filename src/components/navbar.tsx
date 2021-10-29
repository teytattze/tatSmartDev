import { Menu, Transition } from '@headlessui/react';
import { MenuAlt3Icon, XIcon } from '@heroicons/react/solid';
import { useEffect, useState, Fragment } from 'react';
import { NextComponentType } from 'next';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import cx from 'clsx';
import { Container } from './container';
import { IconButton } from './icon-button';
import { checkActiveRoute, routes } from '../lib/routes.lib';

export const Navbar: NextComponentType = () => {
  const [classes, setClasses] = useState<string>(
    'bg-transparent border-transparent',
  );

  const handleScroll = () => {
    if (window.pageYOffset > 50) {
      setClasses(
        'bg-black/60 backdrop-blur-xl shadow-xl border-b-2 border-darkgray/50',
      );
      return;
    }
    setClasses('bg-transparent border-transparent');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cx(
        'fixed top-0 w-full z-50 transition-all ease-in-out duration-300',
        classes,
      )}
    >
      <Container>
        <div className="h-20 w-full flex justify-between items-center">
          <h1 className="text-xl font-semibold font-heading">tatSmartDev</h1>
          <div className="hidden md:flex items-center space-x-8">
            {routes.map((route) => (
              <NavbarLink
                key={route.title}
                title={route.title}
                href={route.href}
              />
            ))}
          </div>
          <div className="block md:hidden">
            <NavbarMenu />
          </div>
        </div>
      </Container>
    </nav>
  );
};

const NavbarMenu: NextComponentType = () => {
  return (
    <Menu as="div" className="z-10">
      {({ open }) => (
        <div className="relative">
          {open ? (
            <IconButton
              aria-label="Close navigation menu"
              className="flex items-center"
              render={(renderProps) => <Menu.Button {...renderProps} />}
            >
              <XIcon className="w-7 h-7" />
            </IconButton>
          ) : (
            <IconButton
              aria-label="Open navigation menu"
              className="flex items-center"
              render={(renderProps) => <Menu.Button {...renderProps} />}
            >
              <MenuAlt3Icon className="w-7 h-7" />
            </IconButton>
          )}
          <Transition
            as={Fragment}
            enter="transition duration-300 ease-in-out"
            enterFrom="transform scale-95 opacity-0 -translate-y-4"
            enterTo="transform scale-100 opacity-100 translate-y-0"
            leave="transition duration-250 ease-in-out"
            leaveFrom="transform scale-100 opacity-100 translate-y-0"
            leaveTo="transform scale-95 opacity-0 -translate-y-4"
          >
            <Menu.Items className="absolute top-10 right-0 py-2 w-32 backdrop-blur-xl border-[1px] border-mediumgray/60 bg-darkgray shadow-xl rounded">
              {routes.map((route) => (
                <Menu.Item as="div" key={route.title}>
                  <NavbarMenuLink href={route.href} title={route.title} />
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </div>
      )}
    </Menu>
  );
};

export type NavbarLinkProps = {
  title: string;
  href: string;
};

export const NavbarLink: NextComponentType<{}, {}, NavbarLinkProps> = ({
  title,
  href,
}) => {
  const { asPath } = useRouter();
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(checkActiveRoute(asPath, href));
  }, [asPath, href]);

  return (
    <NextLink href={href} passHref>
      <a className="group inline-block relative focus:outline-none">
        <p
          className={cx(
            'text-sm uppercase font-medium tracking-wider cursor-pointer group-hover:text-primary group-focus:text-primary group-active:text-primary-dark before:absolute before:block before:w-0 before:h-0.5 before:rounded before:bg-primary before:transition-all before:ease-in-out before:duration-300 before:-bottom-0.5 group-hover:before:w-full group-focus:before:w-full group-active:before:bg-primary-dark',
            { 'before:w-full': active },
          )}
        >
          {title}
        </p>
      </a>
    </NextLink>
  );
};

const NavbarMenuLink: NextComponentType<{}, {}, NavbarLinkProps> = ({
  href,
  title,
}) => {
  const { asPath } = useRouter();
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(checkActiveRoute(asPath, href));
  }, [asPath, href]);

  return (
    <NextLink href={href} passHref>
      <a
        className={cx(
          'inline-block w-full py-2 px-4 typography-button hover:bg-black/60 focus:bg-black/60 active:text-primary',
          { 'text-primary': active },
        )}
        aria-label={title}
      >
        {title}
      </a>
    </NextLink>
  );
};
