import * as React from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { useAvatar, useRipple } from "../../../hooks";
import { getUserName } from "../../../utils";
import { demoUsers } from "../../../utils/demo-data";
import Badge from "../../Badge";
import ListTile from "../../ListTile";

const className = {
  root: "w-full flex items-center justify-between shadow-mine-b px-4 py-2.5",
  tile: "p-2.5 -ml-2.5 -my-2 hover:bg-primary/10",
  avatar: "w-10 h-10 overflow-hidden rounded-full border",
  avatarText:
    "w-10 h-10 border-2 border-secondary text-secondary text-xl uppercase rounded-full",
  tileTitles: "pl-2.5 text-left",
  tileTitle: "text-neutral-700 line-clamp-1 font-semibold",
  titleSubtitle: "text-xs text-zinc-500",
  actions: "ml-2.5",
  actionMore:
    "text-secondary hover:bg-primary/10 flex items-center justify-center p-1 rounded-full",
};

export default function ChatBoxHeader() {
  const user = demoUsers[0];
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
    <header aria-label="Chat-Box header" className={className.root}>
      <ListTile
        classes={{ root: className.tile, main: className.tileTitles }}
        as="button"
        aria-label="User info"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          mouseEvent(e);
        }}
      >
        <ListTile.Leading>
          <Badge variant="dot">{avatar}</Badge>
        </ListTile.Leading>
        <ListTile.Title className={className.tileTitle}>
          {getUserName(user)}
        </ListTile.Title>
        <ListTile.Subtitle className={className.titleSubtitle}>
          Active {true ? "now" : "10m ago"}
        </ListTile.Subtitle>
      </ListTile>
      <div className={className.actions}>
        <button
          type="button"
          aria-label="More chat options"
          className={className.actionMore}
          onClick={(e) => {
            mouseEvent(e);
          }}
        >
          <FiMoreHorizontal size={24} />
        </button>
      </div>
    </header>
  );
}

ChatBoxHeader.displayName = "ChatBox.Header";
