import React from 'react';
import cx from 'clsx';

type RenderIconButtonProps = {
  className: string;
  children: React.ReactNode;
};

type IconButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  children: React.ReactNode;
  className?: string;
  render?: (
    renderProps: RenderIconButtonProps,
  ) => React.ReactElement<any, any> | null;
};

export function IconButton({
  children,
  render,
  className,
  ...props
}: IconButtonProps) {
  const classes = cx(
    'transition-colors cursor-pointer hover:text-primary focus:text-primary active:text-primary-dark',
    className,
  );

  const content = <>{children}</>;

  if (render) {
    return render({
      className: classes,
      children: content,
      ...props,
    });
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
