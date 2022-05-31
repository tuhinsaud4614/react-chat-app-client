import classNames from "classnames";
import { motion, Variants } from "framer-motion";
import * as React from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { demoUsers } from "../../../utils/demo-data";
import Backdrop from "../../Backdrop";
import OptionsContent from "./OptionsContent";
import OptionsHead from "./OptionsHead";

const variants: Variants = {
  hidden: {
    x: "100%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      bounce: 0,
    },
  },
};

const className = {
  rootModal: "fixed z-[901] top-0 right-0 bottom-0 shadow-mine-2",
  rootCommon: "bg-white h-screen",
  root: "w-3/4 min-w-[250px] sm:w-2/4 sm:min-w-[50%] md1:min-w-[250px] md1:basis-[33%] md1:border-l",
};

interface Props {
  onClose?(): void;
}

export default function Options({ onClose }: Props) {
  const matches = useMediaQuery("(min-width: 960px)");
  return (
    <React.Fragment>
      {!matches && <Backdrop className="z-[800]" onClick={onClose} />}
      <motion.aside
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className={classNames(
          className.rootCommon,
          className.root,
          !matches && className.rootModal
        )}
      >
        <OptionsHead user={demoUsers[3]} />
        <OptionsContent conversationId="1" />
      </motion.aside>
    </React.Fragment>
  );
}

Options.displayName = "Options";
