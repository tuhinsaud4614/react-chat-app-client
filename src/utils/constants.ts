import { Variants } from "framer-motion";

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
