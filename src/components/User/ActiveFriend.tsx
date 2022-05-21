import classNames from "classnames";
import useAvatar from "../../hooks/useAvatar";
import { getUserName } from "../../utils";
import { IUser } from "../../utils/interfaces";
import Badge from "../Badge";

const className = {
  root: "flex flex-col justify-start items-center p-2 max-w-[6.5em] max-h-[8em] text-sm cursor-pointer",
  badge: "h-10",
  avatar: "w-10 h-10 rounded-full overflow-hidden",
  common: "w-10 h-10 border-2 border-secondary text-secondary rounded-full",
  text: "text-xl uppercase",
  icon: "text-2xl",
  title:
    "line-clamp-2 text-center mt-1.5 text-zinc-600 capitalize max-w-[calc(6.5em-1rem)] leading-tight",
};

interface Props {
  user: IUser;
}

export default function ActiveFriend({ user }: Props) {
  const avatar = useAvatar({
    user: user,
    className: {
      main: className.avatar,
      text: classNames(className.common, className.text),
      icon: classNames(className.common, className.icon),
    },
  });
  return (
    <li className={className.root}>
      <Badge
        className={className.badge}
        classes={{ root: "bg-red-500 after:border-red-500" }}
        content="99+"
        variant="dot"
        ripple
      >
        {avatar}
      </Badge>
      <strong className={className.title}>{getUserName(user)}</strong>
    </li>
  );
}
