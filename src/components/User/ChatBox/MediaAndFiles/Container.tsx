import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";
import { sidebarVariants } from "../../../../utils/constants";
import { MediaType } from "../../../../utils/types";

interface Props {
  tab: MediaType | null;
  children: React.ReactNode;
}

const className =
  "w-full fixed z-[901] top-0 right-0 bottom-0 bg-white h-screen overflow-y-auto";

export default function Container({ tab, children }: Props) {
  return (
    <AnimatePresence>
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
