import classNames from "classnames";
import * as React from "react";
import { useAvatar, useRipple } from "../../hooks";
import { getUserName } from "../../utils";
import { IUser } from "../../utils/interfaces";
import Badge from "../Badge";
import ListTile from "../ListTile";

const className = {
  root: "cursor-pointer group",
  tile: "w-full rounded border border-transparent group-hover:border-secondary/50 group-hover:bg-primary/10",
  leading: "py-2.5 pl-2.5",
  badge: "h-10",
  avatar: "w-10 h-10 overflow-hidden rounded-full",
  avatarText:
    "w-10 h-10 border-2 border-secondary text-secondary text-xl uppercase rounded-full",
  tileTitles: "p-2.5",
  tileTitle: "line-clamp-1 font-semibold text-secondary capitalize",
};

export interface HorizontalUserTileProps
  extends React.ComponentPropsWithRef<"li"> {
  user: IUser;
  hideActive?: boolean;
}

export default function HorizontalUserTile({
  user,
  hideActive = false,
  ...rest
}: HorizontalUserTileProps) {
  const { mouseEvent } = useRipple({ className: "bg-primary/30" });

  const avatar = useAvatar({
    user,
    className: {
      text: className.avatarText,
      icon: className.avatarText,
      main: className.avatar,
    },
  });

  return (
    <li
      {...rest}
      className={classNames(className.root, rest.className)}
      onClick={(e) => {
        mouseEvent(e);
        rest.onClick && rest.onClick(e);
      }}
    >
      <ListTile
        className={className.tile}
        classes={{ main: className.tileTitles }}
      >
        <ListTile.Leading className={className.leading}>
          {!hideActive ? (
            <Badge className={className.badge} variant="dot" ripple>
              {avatar}
            </Badge>
          ) : (
            avatar
          )}
        </ListTile.Leading>
        <ListTile.Title className={className.tileTitle}>
          {getUserName(user)}
        </ListTile.Title>
      </ListTile>
    </li>
  );
}
