import { useAvatar, useRipple } from "../../../hooks";
import { getUserName } from "../../../utils";
import { IUser } from "../../../utils/interfaces";
import ListTile from "../../ListTile";

const className = {
  root: "px-4",
  tile: "w-full rounded border border-transparent",
  leading: "py-2.5",
  avatar: "w-10 h-10 overflow-hidden rounded-full",
  avatarText:
    "w-10 h-10 border-2 border-secondary text-secondary text-xl uppercase rounded-full",
  tileTitles: "p-2.5",
  tileTitle: "line-clamp-1 font-semibold text-secondary capitalize",
  sendBtn:
    "text-secondary bg-secondary/10 hover:bg-secondary/20 active:scale-90 px-1.5 py-1 rounded-md",
};

export interface Props {
  user: IUser;
  onClick(id: string): void;
}

export default function HeaderForwardItem({ user, onClick, ...rest }: Props) {
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
    <li {...rest} className={className.root}>
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
        <ListTile.Tailing>
          <button
            aria-label="Forward"
            type="button"
            onClick={(e) => {
              mouseEvent(e);
              onClick(user.id);
            }}
            className={className.sendBtn}
          >
            Send
          </button>
        </ListTile.Tailing>
      </ListTile>
    </li>
  );
}

HeaderForwardItem.displayName = "MediaSlide.HeaderForwardItem";
