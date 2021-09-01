import * as React from 'react';
import { motion } from 'framer-motion';

export type FlipCardProps = {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  className: string;
};

export type FlipCardChildProps = {
  children: React.ReactNode;
  className: string;
};

export function FlipCardImpl({
  frontContent,
  backContent,
  className,
}: FlipCardProps) {
  const [front, setFront] = React.useState<boolean>(true);

  return (
    <button
      type="button"
      onClick={() => setFront((prev) => !prev)}
      className={className}
    >
      {front ? frontContent : backContent}
    </button>
  );
}

export function FlipCardFront({ children, className }: FlipCardChildProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: 'easeInOut', duration: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FlipCardBack({ children, className }: FlipCardChildProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: 'easeInOut', duration: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const Front = FlipCardFront;
const Back = FlipCardBack;

export const FlipCard = Object.assign(FlipCardImpl, { Front, Back });
