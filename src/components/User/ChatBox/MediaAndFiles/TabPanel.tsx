import { AnimatePresence, motion, Variants } from "framer-motion";
import React from "react";
import MediaAndFilesContext from "./context";

const className = {
  root: "px-4 flex-grow shrink overflow-y-auto",
};

interface Props {
  children?: React.ReactNode;
}

const variants: Variants = {
  from: {
    x: "-100%",
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
  to: {
    x: "100%",
    opacity: 0,
  },
};

export default function TabPanel({ children }: Props) {
  const { tab } = React.useContext(MediaAndFilesContext);
  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <motion.section
        key={tab}
        variants={variants}
        initial="from"
        animate="show"
        exit="to"
        transition={{
          duration: 0.2,
          delay: 0.2,
        }}
        className={className.root}
      >
        {children}
      </motion.section>
    </AnimatePresence>
  );
}

TabPanel.displayName = "MediaAndFiles.TabPanel";
