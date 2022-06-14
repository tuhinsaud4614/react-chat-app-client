import classNames from "classnames";
import * as React from "react";
import { BiPlusCircle, BiSmile } from "react-icons/bi";
import { useTooltip } from "../../../../hooks";

const className = {
  root: "p-3 bg-white flex items-end",
};

export default function ChatBoxFooter() {
  const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);
  const [value, setValue] = React.useState("");
  const { onHoverEnd, onHoverStart } = useTooltip();

  React.useLayoutEffect(() => {
    const textareaEle = textareaRef.current;
    if (textareaEle) {
      textareaEle.style.height = "18px";
      textareaEle.style.height = `${Math.min(textareaEle.scrollHeight, 124)}px`;
    }
  }, [value]);

  return (
    <div aria-label="Chat-Box Footer" className={className.root}>
      <button
        type="button"
        aria-label={"Open more actions"}
        className="h-9 w-9 flex items-center justify-center rounded-full text-secondary hover:bg-secondary/10 active:bg-secondary/20"
        onMouseEnter={(e) => {
          onHoverStart(e, {
            text: "Open more actions",
            anchorOrigin: { vertical: "top", horizontal: "left" },
          });
        }}
        onMouseLeave={(e) => {
          onHoverEnd();
        }}
      >
        <BiPlusCircle size={24} />
      </button>
      <div className="flex-grow bg-[#868e991a] text-neutral-600 rounded-[1.25rem] flex items-end">
        <textarea
          value={value}
          ref={textareaRef}
          placeholder="Aa"
          rows={4}
          className={classNames(
            "min-w-0 w-full bg-transparent border-0 outline-none self-center my-2 ml-4 resize-none"
          )}
          style={{
            height: Math.min(textareaRef.current?.scrollHeight || 18, 124),
          }}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button
          type="button"
          aria-label={"Open more actions"}
          className="h-9 w-9 flex items-center justify-center rounded-full text-secondary hover:bg-secondary/10 active:bg-secondary/10"
          onMouseEnter={(e) => {
            onHoverStart(e, {
              text: "Choose an emoji",
              anchorOrigin: { vertical: "top", horizontal: "center" },
            });
          }}
          onMouseLeave={(e) => {
            onHoverEnd();
          }}
        >
          <BiSmile size={24} />
        </button>
      </div>
      <button
        type="button"
        aria-label={"Open more actions"}
        className="text-2xl ml-2 h-9 w-9 flex items-center justify-center rounded-full text-secondary hover:bg-secondary/10 active:bg-secondary/10"
        onMouseEnter={(e) => {
          onHoverStart(e, {
            text: "Send a 😮",
            anchorOrigin: { vertical: "top", horizontal: "right" },
          });
        }}
        onMouseLeave={(e) => {
          onHoverEnd();
        }}
      >
        😮
      </button>
    </div>
  );
}

ChatBoxFooter.displayName = "ChatBox.Footer";
