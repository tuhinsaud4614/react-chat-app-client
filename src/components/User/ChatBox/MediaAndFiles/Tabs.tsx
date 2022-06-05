import classNames from "classnames";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { IconType } from "react-icons";
import { BiFile, BiImage, BiVideo } from "react-icons/bi";
import { MediaType } from "../../../../utils/types";

const className = {
  root: "px-4 pb-2.5",
  items: "list-none m-0 flex items-center overflow-x-auto",
  item: "",
  itemBtn: "min-h-[40px] px-2.5 py-2 capitalize rounded-full flex items-center",
  itemBtnText: "inline-block",
};

const textVariant: Variants = {
  active: {
    opacity: 1,
    x: 0,
    width: "auto",
    transition: {
      type: "tween",
      duration: 0.3,
      delay: 0.3,
    },
  },
  inactive: {
    opacity: 0,
    x: -30,
    width: 0,
    transition: {
      type: "tween",
      duration: 0.3,
      delay: 0.1,
    },
  },
};

interface Props {
  tab: MediaType | null;
  onTab(value: MediaType): void;
}

export default function Tabs({ onTab, tab }: Props) {
  const items: { name: string; key: MediaType; Icon: IconType }[] = [
    { name: "images", key: "IMAGES", Icon: BiImage },
    { name: "videos", key: "VIDEOS", Icon: BiVideo },
    { name: "documents", key: "DOCUMENTS", Icon: BiFile },
  ];
  return (
    <div className={className.root}>
      <ul className={className.items}>
        {items.map((item) => (
          <li key={item.key}>
            <motion.button
              aria-label={item.name}
              type="button"
              transition={{
                backgroundColor: { duration: 0.5, easings: "easeIn" },
              }}
              animate={
                tab === item.key
                  ? {
                      backgroundColor: "rgba(14, 116, 144, 1)",
                    }
                  : {
                      backgroundColor: "rgba(14, 116, 144, 0)",
                    }
              }
              className={classNames(
                className.itemBtn,
                tab === item.key ? "text-white" : "text-cyan-700"
              )}
              onClick={() => onTab(item.key)}
            >
              <item.Icon
                size={20}
                className={classNames(tab === item.key && "mr-2")}
              />
              <div className={classNames("overflow-hidden")}>
                <AnimatePresence>
                  {tab === item.key && (
                    <motion.span
                      variants={textVariant}
                      initial="inactive"
                      animate="active"
                      exit={{ width: 0 }}
                      className={className.itemBtnText}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </motion.button>
          </li>
        ))}
      </ul>
    </div>
  );
}

Tabs.displayName = "MediaAndFiles.Tabs";
