import React from 'react';
import { PageTitle as Title } from '../components/page-title';

export type PageLayoutProps = {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
};

export function PageLayout({ children, title, subtitle }: PageLayoutProps) {
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
}
