import classNames from "classnames";
import * as React from "react";
import { useSplitElement } from "../../hooks";
import Portal from "../Portal";
import Body from "./Body";
import ModalContext from "./context";
import Foot from "./Foot";
import Head from "./Head";

const className = {
  backdrop: "fixed z-[900] inset-0 bg-black/50",
  center: "flex items-center justify-center",
  container:
    "flex flex-col bg-white shadow-mine-2 rounded-2xl max-h-[calc(100%-16px)] w-full sm:max-w-[calc(640px-32px)] m-4 sm:mx-auto overflow-x-hidden",
};

interface Props {
  center?: boolean;
  classes?: {
    backdrop?: string;
    container?: string;
  };
  onHide(): void;
  open: boolean;
  scroll?: boolean;
  staticBack?: boolean;
  children?: React.ReactNode;
}

function ModalComponent({
  onHide,
  center = true,
  open,
  staticBack,
  classes,
  children,
}: Props) {
  const { head, body, foot } = useSplitElement(children, {
    head: Head,
    body: Body,
    foot: Foot,
  });
  return (
    <Portal>
      {open && (
        <div
          onClick={!staticBack ? onHide : undefined}
          className={classNames(
            className.backdrop,
            center && className.center,
            !staticBack && "cursor-pointer",
            classes?.backdrop
          )}
        >
          <ModalContext.Provider value={{ onHide: onHide }}>
            <div
              onClick={(e) => e.stopPropagation()}
              className={classNames(className.container, classes?.container)}
            >
              {head}
              {body}
              {foot}
            </div>
          </ModalContext.Provider>
        </div>
      )}
    </Portal>
  );
}

const Modal = Object.assign(ModalComponent, { Head, Body, Foot });
export default Modal;
