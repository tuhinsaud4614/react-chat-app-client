import { motion } from "framer-motion";
import * as React from "react";
import { BiImage } from "react-icons/bi";
import { useTooltip } from "../../../../hooks";
import { chatBoxBtnVariants } from "../../../../utils/constants";

const className = {
  btn: "h-9 w-9 flex items-center justify-center rounded-full text-secondary hover:bg-secondary/10 active:bg-secondary/20 text-2xl",
};
export default function AttachFile(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const { onHoverEnd, onHoverStart } = useTooltip();

  const clickHandler = () => {
    inputRef.current?.click();
  };

  return (
    <motion.button
      variants={chatBoxBtnVariants}
      initial="from"
      animate="to"
      exit="from"
      type="button"
      aria-label={"Attach file"}
      className={className.btn}
      onClick={clickHandler}
      onMouseEnter={(e) => {
        onHoverStart(e, {
          text: "Attach file",
          anchorOrigin: { vertical: "top", horizontal: "left" },
        });
      }}
      onMouseLeave={(e) => {
        onHoverEnd();
      }}
    >
      <BiImage size={24} />
      <input
        {...props}
        ref={inputRef}
        type="file"
        className="hidden"
        multiple
      />
    </motion.button>
  );
}

AttachFile.displayName = "ChatBox.AttachFile";
