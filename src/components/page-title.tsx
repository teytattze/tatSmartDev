import { css, keyframes } from '@emotion/react';

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

const barAnimation = keyframes`
  from {
    transform: translateX(-32px);
  }
  to {
    transform: translateX(75px);
  }
`;

const animatedBarStyle = css`
  &::after {
    content: '';
    position: absolute;
    top: 0;
    height: 100%;
    width: 0.25rem;
    background-color: #171717;
    animation: ${barAnimation} 5s linear infinite;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 1rem;
    height: 100%;
    width: 0.25rem;
    background-color: #171717;
    animation: ${barAnimation} 5s linear infinite;
  }
`;

export function AnimatedBar() {
  const classes = `
    inline-block relative 
    mx-auto w-16 
    h-1 rounded 
    bg-primary
  `;

  return <span className={classes} css={animatedBarStyle} />;
}
