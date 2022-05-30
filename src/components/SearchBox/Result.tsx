import classNames from "classnames";
import { AnimatePresence, motion, MotionProps, Variants } from "framer-motion";
import * as React from "react";
import { SearchBoxContext } from "./context";

const variants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: 16,
    opacity: 0,
  },
};

const className = {
  root: "absolute top-10 left-0 right-40",
};

interface Props extends React.ComponentPropsWithoutRef<"div"> {
  classes?: {
    root?: string;
  };
}

const SearchResult: React.FC<Props & MotionProps> = ({
  classes,
  children,
  ...rest
}) => {
  const { visible, resultRef } = React.useContext(SearchBoxContext);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          {...rest}
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
          ref={resultRef}
          className={classNames(className.root, classes?.root)}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

SearchResult.displayName = "Search.Result";

export default SearchResult;
