import cx from 'clsx';

export type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  const classes = cx('w-full', className);
  return (
    <div className="h-full max-w-screen-xl mx-auto px-4 sm:px-8">
      <div className={classes}>{children}</div>
    </div>
  );
}
