import { AnimatePresence } from "framer-motion";
import * as React from "react";
import { useSplitElement } from "../../hooks";
import Body from "./Body";
import Header from "./Header";

interface Props {
  expanded: boolean;
  children?: React.ReactNode;
}

function Root({ expanded, children }: Props) {
  const { header, body } = useSplitElement(children, {
    header: Header,
    body: Body,
  });
  return (
    <React.Fragment>
      {header}
      <AnimatePresence initial={false}>{expanded && body}</AnimatePresence>
    </React.Fragment>
  );
}

Root.displayName = "Accordion";
const Accordion = Object.assign(
  React.memo(Root, (prev, next) => {
    return prev.expanded === next.expanded;
  }),
  {
    Header: Header,
    Body: Body,
  }
);

export default Accordion;
