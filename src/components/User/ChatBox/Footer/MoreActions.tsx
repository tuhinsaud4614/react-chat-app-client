import { motion } from "framer-motion";
import { BiPlusCircle } from "react-icons/bi";
import { useTooltip } from "../../../../hooks";
import { chatBoxBtnVariants } from "../../../../utils/constants";

const className = {
  btn: "h-9 w-9 flex items-center justify-center rounded-full text-secondary hover:bg-secondary/10 active:bg-secondary/20 text-2xl",
};
export default function MoreActions() {
  const { onHoverEnd, onHoverStart } = useTooltip();

  return (
    <motion.button
      variants={chatBoxBtnVariants}
      initial="from"
      animate="to"
      exit="from"
      type="button"
      aria-label={"Open more actions"}
      className={className.btn}
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
    </motion.button>
  );
}

MoreActions.displayName = "ChatBox.MoreActions";
