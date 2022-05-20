import classNames from "classnames";
import useAvatar from "../../hooks/useAvatar";
import { getUserName } from "../../utils";
import { IUser } from "../../utils/interfaces";

const className = {
  root: "flex flex-col justify-between items-center p-2 max-w-[90px] max-h-[5.5rem]",
  avatar: "w-10 h-10 rounded-full overflow-hidden shrink-0 flex-grow",
  common:
    "w-10 h-10 border-2 border-secondary text-secondary rounded-full shrink-0 flex-grow",
  text: "text-xl uppercase",
  icon: "text-2xl",
  title: "line-clamp-2 text-center text-sm mt-2 text-zinc-700 capitalize",
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
      {avatar}
      <strong className={className.title}>{getUserName(user)}</strong>
    </li>
  );
}
