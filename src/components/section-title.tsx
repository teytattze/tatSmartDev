type SectionTitleProps = {
  title: string;
  subtitle: string;
};

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="space-y-2 md:space-y-4 text-left">
      <h1 className="typography-small typography-secondary">{subtitle}</h1>
      <h2 className="typography-h2">{title}</h2>
    </div>
  );
}
