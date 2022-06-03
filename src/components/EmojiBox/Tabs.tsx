import classNames from "classnames";
import * as React from "react";
import { emojis, Refs } from ".";
import { useRipple } from "../../hooks";

const className = {
  items: "flex items-center justify-center border-t pt-1.5",
  item: "h-8 w-8 hover:bg-primary/10 rounded-full flex items-center justify-center cursor-pointer",
};

interface Props {
  refs: Refs;
}

const TabsComponent = ({ refs }: Props) => {
  const objects = Object.keys(emojis) as Array<keyof typeof emojis>;
  const [active, setActive] = React.useState<keyof typeof emojis>(
    () => objects[0]
  );

  const { mouseEvent } = useRipple({ className: "bg-primary/30" });

  return (
    <ul className={className.items}>
      {objects.map((key) => (
        <li key={key}>
          <button
            className={classNames(
              className.item,
              key === active && "text-red-600 bg-primary/10"
            )}
            type="button"
            aria-label={key}
            onClick={(e) => {
              mouseEvent(e);
              refs[key].current?.scrollIntoView({ behavior: "smooth" });
              setActive(key);
            }}
          >
            {emojis[key].labelIcon}
          </button>
        </li>
      ))}
    </ul>
  );
};

const Tabs = React.memo(TabsComponent);

export default Tabs;
