import * as React from 'react';

export type HiddenProps = {
  hide?: boolean;
  children: React.ReactNode;
};

export function Hidden({ hide = true, children }: HiddenProps) {
  if (hide) return null;
  return <>{children}</>;
}
