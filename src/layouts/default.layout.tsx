import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from '../components/navbar';
import { NextComponentType } from 'next';

export type DefaultLayoutProps = {
  route: string;
};

const variants = {
  hidden: { opacity: 0, y: -100 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
};

export const DefaultLayout: NextComponentType<{}, {}, DefaultLayoutProps> = ({
  children,
  route,
}) => {
  return (
    <>
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
          transition={{ type: 'easeInOut', duration: 0.3 }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </>
  );
};
