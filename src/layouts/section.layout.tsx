import * as React from 'react';
import { SectionTitle as Title } from '../components/section-title';
import { NextComponentType } from 'next';

export type SectionLayoutProps = {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
};

export const SectionLayout: NextComponentType<{}, {}, SectionLayoutProps> = ({
  children,
  title,
  subtitle,
}) => {
  return (
    <section className="pb-24">
      {title && subtitle && (
        <div className="mb-12">
          <Title title={title} subtitle={subtitle} />
        </div>
      )}
      {children}
    </section>
  );
};
