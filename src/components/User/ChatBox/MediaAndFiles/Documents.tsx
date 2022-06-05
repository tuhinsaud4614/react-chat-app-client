import { motion } from "framer-motion";
import { nanoid } from "nanoid";
import * as React from "react";
import Document from "./Document";

const className = {
  root: "list-none m-0 flex flex-col overflow-x-hidden w-full",
};

export default function Documents() {
  return (
    <motion.ul
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.3, bounce: 0 }}
      className={className.root}
    >
      {Array.from({ length: 10 }, () => nanoid()).map((doc) => (
        <Document key={doc} />
      ))}
    </motion.ul>
  );
}

Documents.displayName = "MediaAndFiles.Documents";
