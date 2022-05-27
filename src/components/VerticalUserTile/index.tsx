import classNames from "classnames";
import * as React from "react";
import { useAvatar } from "../../hooks";
import { getUserName } from "../../utils";
import { IUser } from "../../utils/interfaces";
import Badge from "../Badge";

const className = {
  root: "flex flex-col justify-start items-center p-2 max-w-[6.5em] max-h-[8em] text-sm cursor-pointer hover:bg-primary/10 active:bg-primary/20 rounded-2xl",
  badge: "h-10",
  avatar: "w-10 h-10 rounded-full overflow-hidden",
  common: "w-10 h-10 border-2 border-secondary text-secondary rounded-full",
  text: "text-xl uppercase",
  icon: "text-2xl",
  title:
    "line-clamp-2 text-center mt-1.5 text-zinc-600 capitalize max-w-[calc(6.5em-1rem)] leading-tight",
};

export interface VerticalUserTileProps
  extends Omit<React.ComponentPropsWithRef<"li">, "children"> {
  user: IUser;
}

export default function VerticalUserTile({
  user,
  ...rest
}: VerticalUserTileProps) {
  const avatar = useAvatar({
    user: user,
    className: {
      main: className.avatar,
      text: classNames(className.common, className.text),
      icon: classNames(className.common, className.icon),
    },
  });
  return (
    <li
      {...rest}
      onClick={(e) => {
        rest.onClick && rest.onClick(e);
      }}
      className={classNames(className.root, rest.className)}
    >
      <Badge className={className.badge} variant="dot" ripple>
        {avatar}
      </Badge>
      <strong className={className.title}>{getUserName(user)}</strong>
    </li>
  );
}
