import cx from 'clsx';

export type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'small';
};

export function Container({
  children,
  className,
  size = 'default',
}: ContainerProps) {
  const classes = cx('w-full', className);
  return (
    <div className={cx('h-full mx-auto px-4 sm:px-8', sizeByClasses[size])}>
      <div className={classes}>{children}</div>
    </div>
  );
}

const sizeByClasses = {
  default: 'max-w-screen-xl',
  small: 'max-w-screen-lg',
};
