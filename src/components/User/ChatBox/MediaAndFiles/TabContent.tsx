import { motion } from "framer-motion";
import * as React from "react";

const className = {
  root: "list-none m-0 flex flex-wrap overflow-x-hidden w-full",
};

interface Props {
  children?: React.ReactNode;
}

export default function TabContent({ children }: Props) {
  return (
    <motion.ul
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.3, bounce: 0 }}
      className={className.root}
    >
      {children}
    </motion.ul>
  );
}

TabContent.displayName = "MediaAndFiles.TabContent";
