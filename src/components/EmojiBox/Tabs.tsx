import classNames from "classnames";
import * as React from "react";
import { emojis, Refs } from ".";

const className = {
  items: "flex items-center justify-center border-t h-[33px]",
  item: "h-8 w-8 flex items-center justify-center cursor-pointer",
};

interface Props {
  refs: Refs;
}

const TabsComponent = ({ refs }: Props) => {
  console.log("tabs");

  const objects = Object.keys(emojis) as Array<keyof typeof emojis>;
  const [active, setActive] = React.useState<keyof typeof emojis>(
    () => objects[0]
  );

  return (
    <ul className={className.items}>
      {objects.map((key) => (
        <li key={key}>
          <button
            className={classNames(
              className.item,
              key === active && "text-secondary"
            )}
            type="button"
            aria-label={key}
            onClick={() => {
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
