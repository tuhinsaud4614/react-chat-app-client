import { Variants } from "framer-motion";

// LocalStorage keys
export const CHAT_BOX_OPTIONS = "CHAT_BOX_OPTIONS";
export const CHAT_BOX_MEDIA_FILES_OPTIONS = "CHAT_BOX_MEDIA_FILES_OPTIONS";

export const VIDEO_PLAYBACK_SPEED = [
  0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2,
] as const;

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
