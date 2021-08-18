import * as React from 'react';

export type RenderIconButtonProps = {
  className: string;
  children: React.ReactNode;
};

export type IconButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  children: React.ReactNode;
  render?: (
    renderProps: RenderIconButtonProps,
  ) => React.ReactElement<any, any> | null;
};

export function IconButton({ children, render, ...props }: IconButtonProps) {
  const classes =
    'transition-colors cursor-pointer hover:text-primary focus:text-primary active:text-primary-dark';

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
