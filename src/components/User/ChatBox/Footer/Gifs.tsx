import { motion } from "framer-motion";
import { RiFileGifFill } from "react-icons/ri";
import { useTooltip } from "../../../../hooks";
import { chatBoxBtnVariants } from "../../../../utils/constants";

const className = {
  btn: "h-9 w-9 flex items-center justify-center rounded-full text-secondary hover:bg-secondary/10 active:bg-secondary/20 text-2xl",
};

export default function GIFS() {
  const { onHoverEnd, onHoverStart } = useTooltip();

  const clickHandler = () => {};

  return (
    <motion.button
      variants={chatBoxBtnVariants}
      initial="from"
      animate="to"
      exit="from"
      type="button"
      aria-label={"GIFS"}
      className={className.btn}
      onClick={clickHandler}
      onMouseEnter={(e) => {
        onHoverStart(e, {
          text: "GIFS",
          anchorOrigin: { vertical: "top", horizontal: "center" },
        });
      }}
      onMouseLeave={(e) => {
        onHoverEnd();
      }}
    >
      <RiFileGifFill size={24} />
    </motion.button>
  );
}

GIFS.displayName = "ChatBox.GIFS";
