import React from 'react';
import { SectionTitle as Title } from '../components/section-title';

export type SectionLayoutProps = {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
};

export function SectionLayout({
  children,
  title,
  subtitle,
}: SectionLayoutProps) {
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
}
