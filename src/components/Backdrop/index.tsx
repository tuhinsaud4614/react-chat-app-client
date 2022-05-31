import classNames from "classnames";
import { motion, MotionProps, Variants } from "framer-motion";
import * as React from "react";

const backdropVariants: Variants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
  },
};

type Props = React.ComponentPropsWithoutRef<"div"> & MotionProps;

export default function Backdrop({ className, ...rest }: Props) {
  return (
    <motion.div
      {...rest}
      variants={backdropVariants}
      initial="start"
      animate="end"
      exit="start"
      className={classNames(
        "fixed inset-0 bg-gray-500 bg-opacity-75",
        className
      )}
    />
  );
}
