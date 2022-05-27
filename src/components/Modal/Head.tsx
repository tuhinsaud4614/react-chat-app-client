import classNames from "classnames";
import * as React from "react";
import { BiX } from "react-icons/bi";
import ModalContext from "./context";

const className = {
  root: "flex items-center justify-between px-4 py-2.5 border-b rounded-tl-2xl rounded-tr-2xl",
  btn: "text-red-600 hover:bg-red-100 active:bg-red-200 flex items-center justify-center p-1 rounded-full",
};

interface Props extends React.ComponentPropsWithRef<"header"> {
  closeIcon?: boolean;
  classes?: { root?: string; closeBtn?: string };
}

export default function Head({ closeIcon, classes, children, ...rest }: Props) {
  const { onHide } = React.useContext(ModalContext);
  return (
    <header
      {...rest}
      className={classNames(className.root, classes?.root, rest.className)}
    >
      {children}
      {closeIcon && (
        <button
          onClick={onHide}
          className={classNames(className.btn, classes?.closeBtn)}
        >
          <BiX size={24} />
        </button>
      )}
    </header>
  );
}

Head.displayName = "Modal.Head";
