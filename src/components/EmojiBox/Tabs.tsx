import classNames from "classnames";
import * as React from "react";
import { emojiKeys, EmojiKeyType, emojis, Refs } from ".";
import { useRipple } from "../../hooks";

const className = {
  items: "flex items-center justify-center flex-wrap border-t pt-1.5",
  item: "h-8 w-8 hover:bg-primary/10 rounded-full flex items-center justify-center cursor-pointer",
};

interface Props {
  refs: Refs;
  active: EmojiKeyType;
  onTab(id: EmojiKeyType): void;
}

const Tabs = ({ refs, active, onTab }: Props) => {
  const { mouseEvent } = useRipple({ className: "bg-primary/30" });

  return (
    <ul className={className.items}>
      {emojiKeys.map((key) => (
        <li key={key} className="mx-0.5">
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
              if (key !== "Most Popular") {
                onTab(key);
              }
            }}
          >
            {emojis[key].labelIcon}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
