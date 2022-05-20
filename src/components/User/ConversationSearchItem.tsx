import { useAvatar, useRipple } from "../../hooks";
import { getUserName } from "../../utils";
import { IUser } from "../../utils/interfaces";
import ListTile from "../ListTile";

const className = {
  root: "cursor-pointer group",
  tile: "w-full rounded border border-transparent group-hover:border-secondary/50 group-hover:bg-primary/10",
  leading: "py-2.5 pl-2.5",
  avatar: "w-10 h-10 overflow-hidden rounded-full",
  avatarText:
    "w-10 h-10 border-2 border-secondary text-secondary text-xl uppercase rounded-full",
  tileTitles: "p-2.5",
  tileTitle: "line-clamp-1 font-semibold text-secondary capitalize",
};

interface Props {
  user: IUser;
  onClick?(): void;
}

export default function ConversationSearchItem({ user, onClick }: Props) {
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
      className={className.root}
      onClick={(e) => {
        mouseEvent(e);
        onClick && onClick();
      }}
    >
      <ListTile
        className={className.tile}
        classes={{ main: className.tileTitles }}
      >
        <ListTile.Leading className={className.leading}>
          {avatar}
        </ListTile.Leading>
        <ListTile.Title className={className.tileTitle}>
          {getUserName(user)}
        </ListTile.Title>
      </ListTile>
    </li>
  );
}
