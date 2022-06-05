import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";
import { sidebarVariants } from "../../../../utils/constants";
import MediaAndFilesContext from "./context";

interface Props {
  children: React.ReactNode;
}

const className =
  "w-full fixed z-[901] top-0 right-0 bottom-0 bg-white h-screen flex flex-col overflow-x-hidden";

export default function Container({ children }: Props) {
  const { tab } = React.useContext(MediaAndFilesContext);
  return (
    <AnimatePresence exitBeforeEnter>
      {tab && (
        <motion.section
          variants={sidebarVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className={className}
        >
          {children}
        </motion.section>
      )}
    </AnimatePresence>
  );
}

Container.displayName = "MediaAndFiles.Container";
