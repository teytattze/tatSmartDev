import * as React from 'react';
import { PageTitle as Title } from './page-title';

export type PageProps = {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
};

function PageImpl({ children, title, subtitle }: PageProps) {
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

export const Page = Object.assign(PageImpl, { Title });
