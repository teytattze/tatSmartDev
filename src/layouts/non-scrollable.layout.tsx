import { useState, useEffect } from 'react';
import { NextComponentType } from 'next';

export const NonScrollableLayout: NextComponentType = ({ children }) => {
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    const screenHeight = window.innerHeight;
    setHeight(screenHeight);
  }, []);

  return <div style={{ height: `${height}px` }}>{children}</div>;
};
