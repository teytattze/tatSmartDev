import { NextComponentType } from 'next';
import * as React from 'react';
import { PageTitle as Title } from '../components/page-title';

export type PageLayoutProps = {
  title?: string;
  subtitle?: string;
};

export const PageLayout: NextComponentType<{}, {}, PageLayoutProps> = ({
  children,
  title,
  subtitle,
}) => {
  return (
    <div className="mt-36">
      {title && subtitle && (
        <div className="mb-20">
          <Title title={title} subtitle={subtitle} />
        </div>
      )}
      {children}
    </div>
  );
};
