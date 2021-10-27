type PageTitleProps = {
  title: string;
  subtitle: string;
};

export function PageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <div className="space-y-2 md:space-y-4 text-center">
      <h1 className="typography-p typography-secondary">{subtitle}</h1>
      <h2 className="typography-h1">{title}</h2>
      <AnimatedBar />
    </div>
  );
}

export function AnimatedBar() {
  const classes = `
    inline-block relative 
    mx-auto w-16 
    h-1 rounded
    bg-primary
    animatedBar
  `;

  return <span className={classes} />;
}
