import * as React from 'react';

export interface IWindowDimensions {
  height: number | undefined;
  width: number | undefined;
}

export function useWindowDimensions() {
  const [dimensions, setDimensions] = React.useState<IWindowDimensions>({
    height: undefined,
    width: undefined,
  });

  React.useEffect(() => {
    const handleResize = (): void => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { ...dimensions };
}
