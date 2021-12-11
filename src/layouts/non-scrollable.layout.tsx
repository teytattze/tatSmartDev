import React from 'react';

type NonScrollableLayoutProps = {
  children: React.ReactNode;
};

export function NonScrollableLayout({ children }: NonScrollableLayoutProps) {
  const [height, setHeight] = React.useState<number>(0);

  React.useEffect(() => {
    const screenHeight = window.innerHeight;
    setHeight(screenHeight);
  }, []);

  return (
    <>{height && <div style={{ height: `${height}px` }}>{children}</div>}</>
  );
}
