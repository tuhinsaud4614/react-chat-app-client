import classNames from "classnames";
import * as React from "react";
import { BiX } from "react-icons/bi";
import { useAvatar, useRipple } from "../../hooks";
import { getUserName } from "../../utils";
import { IUser } from "../../utils/interfaces";
import Badge from "../Badge";
import ListTile from "../ListTile";

const className = {
  root: "",
  tile: "w-full rounded border border-transparent",
  leading: "py-2.5 pl-2.5",
  badge: "h-10",
  avatar: "w-10 h-10 overflow-hidden rounded-full",
  avatarText:
    "w-10 h-10 border-2 border-secondary text-secondary text-xl uppercase rounded-full",
  tileTitles: "p-2.5",
  tileTitle: "line-clamp-1 font-semibold text-secondary capitalize",
  clearBtn:
    "text-red-600 hover:bg-red-100 active:bg-red-200 flex items-center justify-center p-1 rounded-full",
};

export interface Props {
  user: IUser;
  onClear(id: string): void;
}

export default function EditSearchItem({ user, onClear, ...rest }: Props) {
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
    <li {...rest} className={classNames(className.root)}>
      <ListTile
        className={className.tile}
        classes={{ main: className.tileTitles }}
      >
        <ListTile.Leading className={className.leading}>
          <Badge className={className.badge} variant="dot" ripple>
            {avatar}
          </Badge>
        </ListTile.Leading>
        <ListTile.Title className={className.tileTitle}>
          {getUserName(user)}
        </ListTile.Title>
        <ListTile.Tailing>
          <button
            onClick={(e) => {
              mouseEvent(e);
              onClear(user.id);
            }}
            className={className.clearBtn}
          >
            <BiX size={24} />
          </button>
        </ListTile.Tailing>
      </ListTile>
    </li>
  );
}

EditSearchItem.displayName = "EditSearch.Item";
