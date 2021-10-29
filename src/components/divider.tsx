import * as React from 'react';
import cx from 'clsx';

export type DividerProps = React.ComponentPropsWithoutRef<'div'> & {
  color: 'primary' | 'secondary';
};

export function Divider({ className, color, ...props }: DividerProps) {
  return <div className={cx('rounded', colors[color], className)} {...props} />;
}

type Colors = Record<NonNullable<DividerProps['color']>, string>;

const colors: Colors = {
  primary: 'bg-primary',
  secondary: 'bg-mediumgray',
};
