import classNames from "classnames";
import { AnimatePresence, motion, Variants } from "framer-motion";
import * as React from "react";
import { useSplitElement } from "../../hooks";
import Portal from "../Portal";
import Body from "./Body";
import ModalContext from "./context";
import Foot from "./Foot";
import Head from "./Head";

const className = {
  backdrop: "fixed z-[900] inset-0 bg-gray-500 bg-opacity-75",
  center: "flex items-center justify-center",
  container:
    "flex flex-col bg-white shadow-mine-2 rounded-2xl max-h-[calc(100%-32px)] w-full sm:max-w-[calc(640px-32px)] m-4 sm:mx-auto overflow-x-hidden",
};

const backdropVariants: Variants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
  },
};

const containerVariants: Variants = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
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
      <AnimatePresence exitBeforeEnter>
        {open && (
          <motion.div
            role="dialog"
            variants={backdropVariants}
            initial="start"
            animate="end"
            exit="start"
            onClick={!staticBack ? onHide : undefined}
            className={classNames(
              className.backdrop,
              center && className.center,
              !staticBack && "cursor-pointer",
              classes?.backdrop
            )}
          >
            <ModalContext.Provider value={{ onHide: onHide }}>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
                className={classNames(className.container, classes?.container)}
              >
                {head}
                {body}
                {foot}
              </motion.div>
            </ModalContext.Provider>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
}

const Modal = Object.assign(ModalComponent, { Head, Body, Foot });
export default Modal;
