import classNames from "classnames";
import * as React from "react";
import { useAvatar, useRipple } from "../../../hooks";
import { getUserName } from "../../../utils";
import { IUser } from "../../../utils/interfaces";
import UserProfiler from "./OptionsHeadProfiler";

const className = {
  root: "flex flex-col items-center",
  avatarRoot: "px-4 pt-4 pb-2.5 flex justify-center",
  avatar: "w-[72px] h-[72px] rounded-full overflow-hidden",
  common: "w-10 h-10 border-2 border-secondary text-secondary rounded-full",
  text: "text-xl uppercase",
  icon: "text-2xl",
  userNameBtn:
    "px-2 py-1.5 font-semibold text-secondary hover:bg-primary/10 rounded-md capitalize line-clamp-1",
  status: "text-xs text-zinc-500 leading-4 inline-block px-4",
};

interface Props {
  user: IUser;
}

export default function OptionsHead({ user }: Props) {
  const [open, setOpen] = React.useState(false);
  const { mouseEvent } = useRipple({ className: "bg-primary/30" });
  const avatar = useAvatar({
    user: user,
    className: {
      main: className.avatar,
      text: classNames(className.common, className.text),
      icon: classNames(className.common, className.icon),
    },
  });
  return (
    <header className={className.root}>
      <div className={className.avatarRoot}>{avatar}</div>
      <button
        aria-label="User Info"
        type="button"
        className={className.userNameBtn}
        onClick={(e) => {
          mouseEvent(e);
          setOpen(true);
        }}
      >
        {getUserName(user)}
      </button>
      <UserProfiler open={open} onClose={() => setOpen(false)} user={user} />
      <span className={className.status}>
        Active {true ? "now" : "10m ago"}
      </span>
    </header>
  );
}

OptionsHead.displayName = "ChatBox.Options.Head";
