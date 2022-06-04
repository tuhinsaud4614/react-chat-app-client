import * as React from "react";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { useRipple } from "../../../hooks";
import Accordion from "../../Accordion";

const className = {
  header:
    "flex items-center justify-between mx-4 p-2.5 cursor-pointer hover:bg-primary/10 rounded-2xl",
  text: "text-sm text-neutral-700 font-semibold",
  arrow: "text-secondary",
  body: "list-none m-0 bg-white overflow-hidden",
  item: "mx-4 p-2.5",
};

interface Props {
  children: React.ReactNode;
  title: string;
}

const OptionsItems: React.FC<Props> = ({ children, title }) => {
  const [expended, setExpanded] = React.useState(false);
  const { mouseEvent } = useRipple({ className: "bg-primary/30" });
  const ArrowIcon = expended ? BiChevronDown : BiChevronRight;

  return (
    <Accordion expanded={expended}>
      <Accordion.Header
        className={className.header}
        expanded={expended}
        onClick={(e) => {
          mouseEvent(e);
          setExpanded((prev) => !prev);
        }}
      >
        <strong className={className.text}>{title}</strong>
        <ArrowIcon size={28} className={className.arrow} />
      </Accordion.Header>
      <Accordion.Body as="ul" className={className.body}>
        {children}
      </Accordion.Body>
    </Accordion>
  );
};

OptionsItems.displayName = "Options.Items";

export default OptionsItems;
