import { Switch } from '@headlessui/react';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import cx from 'clsx';
import { useTheme } from 'src/shared/hooks/use-theme';

export function DarkModeToggle() {
  const { dark, handleDarkMode } = useTheme();

  return (
    <Switch
      checked={dark}
      onChange={handleDarkMode}
      className="relative flex items-center justify-between h-6 w-12 px-0.5 bg-primary border-2 border-transparent rounded-full cursor-pointer focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75"
    >
      <span className="sr-only">Dark mode toggle</span>
      <MoonIcon className="w-5 h-5 text-white" />
      <span
        aria-hidden="true"
        className={cx(
          'absolute top-0 left-0 h-5 w-5 bg-offwhite pointer-events-none rounded-full shadow-lg ring-0 transition-transform ease-in-out duration-300',
          { 'translate-x-6': dark },
          { 'translate-x-0': !dark },
        )}
      />
      <SunIcon className="w-5 h-5 text-white" />
    </Switch>
  );
}
