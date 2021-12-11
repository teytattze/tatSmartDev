import React from 'react';
import cx from 'clsx';

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  children?: React.ReactNode;
  endIcon?: React.ReactNode;
  loading?: boolean;
  loadingText?: string;
  variant?: 'contained' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  render?: (renderProps: any) => React.ReactElement<any, any>;
};

export function Button({
  children,
  endIcon,
  className,
  loading = false,
  loadingText = 'Loading...',
  variant = 'contained',
  size = 'md',
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

  const classes = cx(
    'select-none text-sm font-medium tracking-wide uppercase rounded transition-all',
    { 'pointer-events-none opacity-50': loading },
    variants[variant],
    sizes[size],
    className,
  );

  const content = (
    <>
      {loading ? (
        <span>{loadingText}</span>
      ) : (
        <div className="flex items-center justify-center">
          <span>{children}</span>
          <span>{endIconNode}</span>
        </div>
      )}
    </>
  );

  if (render) {
    return render({
      className: classes,
      children: content,
      ...props,
    });
  }

  return (
    <button className={classes} disabled={loading} {...props}>
      {content}
    </button>
  );
}

const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
  contained: 'text-white bg-primary hover:bg-primary/80 focus:bg-primary/80',
  outlined:
    'text-primary border-1 border-primary hover:text-white hover:bg-primary/80 focus:text-white focus:bg-primary/80',
  ghost: 'text-primary hover:bg-primary/20 focus:bg-primary/20',
};

const sizes: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'py-1.5 px-3',
  md: 'py-2 px-4',
  lg: 'py-3 px-5',
};
