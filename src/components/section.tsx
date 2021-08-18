import * as React from 'react';
import cx from 'clsx';
import { Container } from './container';
import { SectionTitle as Title } from './section-title';

export type SectionProps = React.ComponentPropsWithoutRef<'section'> & {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
};

function SectionImpl({
  children,
  className,
  title,
  subtitle,
  ...props
}: SectionProps) {
  const classes = cx('pb-24', className);

  return (
    <section className={classes} {...props}>
      <Container>
        {title && subtitle && (
          <div className="mb-12">
            <Title title={title} subtitle={subtitle} />
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}

export const Section = Object.assign(SectionImpl, { Title });
