import { Menu, Transition } from '@headlessui/react';
import { MenuAlt3Icon, XIcon } from '@heroicons/react/solid';
import * as React from 'react';
import { routes } from 'src/shared/consts/core.const';
import { IconButton } from '../icon-button';
import { NavbarMenuButton } from './navbar-menu-link';

export function NavbarMenu() {
  return (
    <Menu as="div" className="z-10">
      {({ open }) => (
        <div className="relative">
          <Menu.Button className="flex items-center">
            {open ? (
              <IconButton render={(renderProps) => <div {...renderProps} />}>
                <XIcon className="w-7 h-7" />
              </IconButton>
            ) : (
              <IconButton render={(renderProps) => <div {...renderProps} />}>
                <MenuAlt3Icon className="w-7 h-7" />
              </IconButton>
            )}
          </Menu.Button>
          <Transition
            as={React.Fragment}
            enter="transition duration-300 ease-in-out"
            enterFrom="transform scale-95 opacity-0 -translate-y-4"
            enterTo="transform scale-100 opacity-100 translate-y-0"
            leave="transition duration-250 ease-in-out"
            leaveFrom="transform scale-100 opacity-100 translate-y-0"
            leaveTo="transform scale-95 opacity-0 -translate-y-4"
          >
            <Menu.Items className="absolute top-10 right-0 py-2 w-32 border-[1px] border-darkgrey/50 bg-darkgrey backdrop-blur-xl shadow-xl rounded">
              {routes.map((route) => (
                <Menu.Item as="div" key={route.title}>
                  <NavbarMenuButton href={route.href} title={route.title} />
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </div>
      )}
    </Menu>
  );
}
