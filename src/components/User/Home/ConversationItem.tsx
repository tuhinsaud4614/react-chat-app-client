import { motion, Variants } from "framer-motion";
import * as React from "react";
import { BsCheckCircle, BsCheckCircleFill } from "react-icons/bs";
import { useAvatar, useRipple } from "../../../hooks";
import { getUserName } from "../../../utils";
import { IUser } from "../../../utils/interfaces";
import Avatar from "../../Avatar";
import Badge from "../../Badge";
import ListTile from "../../ListTile";
import ConversationItemMenu from "./ConversationItemMenu";

const className = {
  root: "cursor-pointer group rounded-lg relative",
  tile: "w-full group-hover:bg-primary/10 rounded-lg",
  leading: "py-2.5 pl-2.5",
  avatar: "w-10 h-10 overflow-hidden rounded-full border",
  avatarText:
    "w-10 h-10 border-2 border-secondary text-secondary text-xl uppercase rounded-full",
  tileTitles: "p-2.5",
  tileTitle: "line-clamp-1 text-sm font-medium text-zinc-700 capitalize",
  titleSubtitle: "mt-1 flex items-start text-xs text-zinc-500",
  tailing: "px-2",
};

const variants: Variants = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

interface Props {
  user: IUser;
}

export default function ConversationItem({ user }: Props) {
  const avatar = useAvatar({
    user,
    className: {
      text: className.avatarText,
      icon: className.avatarText,
      main: className.avatar,
    },
  });

  const { mouseEvent } = useRipple({
    className: "bg-primary/20",
  });

  return (
    <motion.li
      variants={variants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      className={className.root}
    >
      <ConversationItemMenu key={user.id} userId={user.id} />
      <ListTile
        className={className.tile}
        classes={{ main: className.tileTitles }}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          mouseEvent(e);
        }}
      >
        <ListTile.Leading className={className.leading}>
          <Badge variant="dot">{avatar}</Badge>
        </ListTile.Leading>
        <ListTile.Title className={className.tileTitle}>
          {getUserName(user)}
        </ListTile.Title>
        <ListTile.Subtitle className={className.titleSubtitle}>
          <span className="line-clamp-1 flex-grow">
            You: ghhfgh gfhfg hhghg hfghfg hgffhf gfhg hfgfhfh
          </span>
          <span className="inline-block mx-0.5">·</span>
          <span className="whitespace-nowrap">16 May</span>
        </ListTile.Subtitle>
        <ListTile.Tailing className={className.tailing}>
          <Avatar.Icon
            icon={false ? BsCheckCircleFill : BsCheckCircle}
            size={16}
            className="text-[#bcc0c4]"
          />
        </ListTile.Tailing>
      </ListTile>
    </motion.li>
  );
}
