import * as React from 'react';
import cx from 'clsx';

export type RenderButtonProps = {
  className: string;
  children: React.ReactNode;
};

export type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  children?: React.ReactNode;
  endIcon?: React.ReactNode;
  loading?: boolean;
  loadingText?: string;
  variant?: 'contained' | 'outlined' | 'ghost';
  render?: (
    renderProps: RenderButtonProps,
  ) => React.ReactElement<any, any> | null;
};

export function Button({
  children,
  endIcon,
  className,
  loading = false,
  loadingText = 'Loading...',
  variant = 'contained',
  render,
  ...props
}: ButtonProps) {
  let endIconNode: React.ReactElement | null = null;
  if (endIcon && React.isValidElement(endIcon)) {
    const endIconProps = endIcon.props as any;
    endIconNode = React.cloneElement(endIcon, {
      className: cx('ml-2 w-5 h-5', endIconProps.className),
    });
  }

  const btnClasses = cx(
    'inline-block select-none py-2 px-4 text-sm font-medium tracking-wide uppercase rounded transition-all ring-primary/30 focus:outline-none focus:ring active:ring-4',
    { 'pointer-events-none opacity-50': loading },
    variants[variant],
    className,
  );

  const content = (
    <>
      {loading ? (
        <p>{loadingText}</p>
      ) : (
        <div className="flex items-center">
          <p>{children}</p>
          {endIconNode}
        </div>
      )}
    </>
  );

  if (render) {
    return render({
      className: btnClasses,
      children: content,
      ...props,
    });
  }

  return (
    <button className={btnClasses} {...props}>
      {content}
    </button>
  );
}

const variants = {
  contained: 'text-white bg-primary hover:bg-primary/90',
  outlined:
    'text-primary border border-primary hover:bg-primary hover:text-white',
  ghost: 'text-primary hover:bg-primary/20 focus:bg-primary/20',
};
