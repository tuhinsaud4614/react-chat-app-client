import classNames from "classnames";
import * as React from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { demoUsers } from "../../../utils/demo-data";
import Backdrop from "../../Backdrop";
import OptionsHead from "./OptionsHead";

const className = {
  rootModal: "fixed z-[901] top-0 right-0 bottom-0",
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
      {!matches && <Backdrop onClick={onClose} />}
      <aside
        className={classNames(
          className.rootCommon,
          className.root,
          !matches && className.rootModal
        )}
      >
        <OptionsHead user={demoUsers[3]} />
      </aside>
    </React.Fragment>
  );
}

Options.displayName = "ChatBox.Options";
