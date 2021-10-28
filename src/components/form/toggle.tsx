import { Switch } from '@headlessui/react';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import cx from 'clsx';

export type ToggleProps = {
  checked: boolean;
  onChange: () => void;
  title?: string;
  size?: 'default';
};

export function Toggle({
  checked,
  onChange,
  title = 'Switch',
  size = 'default',
}: ToggleProps) {
  return (
    <Switch
      checked={checked}
      onChange={onChange}
      className={cx(
        'relative flex items-center justify-between h-6 w-12 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-300 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75',
        { 'bg-primary': checked },
        { 'bg-actionwhite': !checked },
      )}
    >
      <span className="sr-only">{title}</span>
      <MoonIcon className="w-5 h-5 text-white" />
      <span
        aria-hidden="true"
        className={cx(
          'absolute top-0 left-0 h-5 w-5 bg-white pointer-events-none rounded-full shadow-lg ring-0 transition ease-in-out duration-300',
          { 'translate-x-6': checked },
          { 'translate-x-0': !checked },
        )}
      />
      <SunIcon className="w-5 h-5 text-white" />
    </Switch>
  );
}
