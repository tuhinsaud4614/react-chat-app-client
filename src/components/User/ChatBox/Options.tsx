import classNames from "classnames";
import { motion } from "framer-motion";
import * as React from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { sidebarVariants } from "../../../utils/constants";
import { demoUsers } from "../../../utils/demo-data";
import Backdrop from "../../Backdrop";
import OptionsContent from "./OptionsContent";
import OptionsHead from "./OptionsHead";

const className = {
  rootModal: "fixed z-[901] top-0 right-0 bottom-0 shadow-mine-2",
  rootCommon: "bg-white h-screen",
  root: "w-3/4 min-w-[250px] max-w-sm md1:min-w-[250px] md1:basis-1/3 md1:max-w-sm md1:border-l",
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
        variants={sidebarVariants}
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
