import * as React from 'react';
import cx from 'clsx';
import { Container } from '../container';
import { NavbarLink } from './navbar-link';
import { NavbarMenu } from './navbar-menu';
import { routes } from 'src/shared/consts/core.const';

export function Navbar() {
  const [classes, setClasses] = React.useState<string>(
    'bg-transparent border-transparent',
  );

  const handleScroll = () => {
    if (window.pageYOffset > 50) {
      setClasses(
        'bg-darkergrey/90 backdrop-blur-xl shadow-xl border-b-2 border-darkgrey/50',
      );
      return;
    }
    setClasses('bg-transparent border-transparent');
  };

  React.useLayoutEffect(() => {
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
      <Container className="h-20 w-full flex justify-between items-center">
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
      </Container>
    </nav>
  );
}
