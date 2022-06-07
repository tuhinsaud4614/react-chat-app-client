import { Variants } from "framer-motion";

// LocalStorage keys
export const CHAT_BOX_OPTIONS = "CHAT_BOX_OPTIONS";
export const CHAT_BOX_MEDIA_FILES_OPTIONS = "CHAT_BOX_MEDIA_FILES_OPTIONS";

export const sidebarVariants: Variants = {
  hidden: {
    x: "100%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      bounce: 0,
    },
  },
};
