import cx from 'clsx';

export type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  size?: 'xl' | 'lg' | 'md';
};

export function Container({
  children,
  className,
  size = 'xl',
}: ContainerProps) {
  const classes = cx('w-full', className);
  return (
    <div className={cx('h-full mx-auto px-4 sm:px-8', sizeByClasses[size])}>
      <div className={classes}>{children}</div>
    </div>
  );
}

const sizeByClasses = {
  xl: 'max-w-screen-xl',
  lg: 'max-w-screen-lg',
  md: 'max-w-screen-md',
};
