import { BiUser } from "react-icons/bi";
import { useRipple } from "../../hooks";
import { IUser } from "../../utils/interfaces";
import Avatar from "../Avatar";
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
  let leading = (
    <Avatar.Icon icon={BiUser} size={24} rootClassName={className.avatarText} />
  );

  const { mouseEvent } = useRipple({ className: "bg-primary/30" });

  if (user.avatar) {
    leading = <Avatar image={user.avatar} rootClassName={className.avatar} />;
  } else if (user.firstName) {
    leading = (
      <Avatar.Text className={className.avatarText}>
        {user.firstName[0]}
      </Avatar.Text>
    );
  } else if (user.lastName) {
    leading = (
      <Avatar.Text className={className.avatarText}>
        {user.lastName[0]}
      </Avatar.Text>
    );
  }
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
          {leading}
        </ListTile.Leading>
        {user.firstName || user.lastName ? (
          <ListTile.Title className={className.tileTitle}>
            {user.firstName} {user.lastName}
          </ListTile.Title>
        ) : (
          <ListTile.Title className={className.tileTitle}>
            {user.email.split("@")[0]}
          </ListTile.Title>
        )}
      </ListTile>
    </li>
  );
}
