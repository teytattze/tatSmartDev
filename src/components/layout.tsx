import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useWindowDimensions } from 'src/shared/hooks/use-window-dimensions';
import { Navbar } from './navbar';

export type LayoutProps = {
  children: React.ReactNode;
  route: string;
};

const variants = {
  hidden: { opacity: 0, y: -100 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
};

export function Layout({ children, route }: LayoutProps) {
  const { height } = useWindowDimensions();

  console.log(route);

  return (
    <>
      {height && (
        <div
          className="relative w-full overflow-y-auto"
          style={{ minHeight: `${height}px` }}
        >
          <Navbar />
          <AnimatePresence
            exitBeforeEnter
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <motion.main
              key={route}
              variants={variants}
              initial="hidden"
              animate="enter"
              exit="exit"
              transition={{ type: 'linear', duration: 0.3 }}
            >
              {children}
            </motion.main>
          </AnimatePresence>
        </div>
      )}
    </>
  );
}
