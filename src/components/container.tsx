import cx from 'clsx';

export type ContainerProps = {
  children: React.ReactNode;
  size?: 'xl' | 'lg' | 'md';
};

export function Container({ children, size = 'xl' }: ContainerProps) {
  return (
    <div className={cx('h-full mx-auto px-4 xs:px-6 sm:px-8', sizes[size])}>
      {children}
    </div>
  );
}

const sizes: Record<NonNullable<ContainerProps['size']>, string> = {
  xl: 'max-w-screen-xl',
  lg: 'max-w-screen-lg',
  md: 'max-w-screen-md',
};
