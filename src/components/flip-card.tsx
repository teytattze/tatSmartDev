import { NextComponentType } from 'next';

const FlipCardImpl: NextComponentType = ({ children }) => {
  return (
    <div
      className="block group w-full h-full relative"
      tabIndex={0}
      role="button"
      aria-label="Flippable Card"
    >
      {children}
    </div>
  );
};

export const FlipCardFront: NextComponentType = ({ children }) => {
  return (
    <div
      className="z-20 absolute w-full h-full transition-opacity group-hover:opacity-0 group-focus:opacity-0 group-hover:z-0 group-focus:z-0"
      aria-label="Card's front"
    >
      {children}
    </div>
  );
};

export const FlipCardBack: NextComponentType = ({ children }) => {
  return (
    <div className="z-10 absolute w-full h-full" aria-label="Card's back">
      {children}
    </div>
  );
};

export const FlipCard = Object.assign(FlipCardImpl, {
  Front: FlipCardFront,
  Back: FlipCardBack,
});
