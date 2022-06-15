import { motion } from "framer-motion";
import * as React from "react";
import { BiImage, BiPlusCircle, BiSticker } from "react-icons/bi";
import { RiFileGifFill } from "react-icons/ri";
import { useRipple, useTooltip } from "../../../../hooks";
import { chatBoxBtnVariants } from "../../../../utils/constants";
import ListTile from "../../../ListTile";
import Menu from "../../../Menu";

const className = {
  btn: "h-9 w-9 flex items-center justify-center rounded-full text-secondary hover:bg-secondary/10 active:bg-secondary/20 text-2xl",
  items:
    "list-none m-0 flex flex-col w-52 overflow-y-auto overflow-x-hidden p-1",
  item: "p-2 hover:bg-primary/10 rounded-md text-neutral-700",
};

interface Props {
  onFileChange?(event: React.ChangeEvent<HTMLInputElement>): void;
}

export default function MoreActions({ onFileChange }: Props) {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const [anchorEle, setAnchorEle] = React.useState<null | HTMLButtonElement>(
    null
  );
  const { onHoverEnd, onHoverStart } = useTooltip();
  const { mouseEvent } = useRipple({
    className: "bg-primary/30",
  });

  return (
    <React.Fragment>
      <Menu
        open={Boolean(anchorEle)}
        anchorOrigin={{ horizontal: "left", vertical: "top" }}
        onClose={() => {
          setAnchorEle(null);
        }}
        anchorEle={anchorEle}
      >
        <ul className={className.items}>
          <ListTile
            as="li"
            role="button"
            aria-label="Choose a sticker"
            classes={{ root: className.item, main: "ml-2" }}
            onClick={(e: React.MouseEvent<HTMLLIElement>) => {
              mouseEvent(e);
            }}
          >
            <ListTile.Leading>
              <BiSticker size={24} />
            </ListTile.Leading>
            <ListTile.Title>Choose a sticker</ListTile.Title>
          </ListTile>
          <ListTile
            as="li"
            role="button"
            aria-label="Choose a gif"
            classes={{ root: className.item, main: "ml-2" }}
            onClick={(e: React.MouseEvent<HTMLLIElement>) => {
              mouseEvent(e);
            }}
          >
            <ListTile.Leading>
              <RiFileGifFill size={24} />
            </ListTile.Leading>
            <ListTile.Title>Choose a gif</ListTile.Title>
          </ListTile>
          <ListTile
            as="li"
            role="button"
            aria-label="Attach a file"
            classes={{ root: className.item, main: "ml-2" }}
            onClick={(e: React.MouseEvent<HTMLLIElement>) => {
              mouseEvent(e);
              inputRef.current?.click();
            }}
          >
            <ListTile.Leading>
              <BiImage size={24} />
            </ListTile.Leading>
            <ListTile.Title>Attach a file</ListTile.Title>
          </ListTile>
        </ul>
      </Menu>
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={(e) => {
          setAnchorEle(null);
          onFileChange && onFileChange(e);
        }}
        multiple
      />
      <motion.button
        variants={chatBoxBtnVariants}
        initial="from"
        animate="to"
        exit="from"
        type="button"
        aria-label={"Open more actions"}
        className={className.btn}
        onClick={(e) => setAnchorEle(e.currentTarget)}
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
    </React.Fragment>
  );
}

MoreActions.displayName = "ChatBox.MoreActions";
