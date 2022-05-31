import { motion } from "framer-motion";
import * as React from "react";
import { BiCheck, BiEditAlt, BiX } from "react-icons/bi";
import { useAvatar, useRipple } from "../../../../hooks";
import { getUserName } from "../../../../utils";
import { IUser } from "../../../../utils/interfaces";
import ListTile from "../../../ListTile";

const className = {
  leading: "py-2.5 pl-2.5",
  avatar: "w-9 h-9 overflow-hidden rounded-full border",
  avatarText:
    "w-9 h-9 border-2 border-secondary text-secondary text-xl uppercase rounded-full",
  tileTitles: "p-2.5",
  inputContainer: "relative",
  input:
    "bg-[#868e991a] outline-none border focus:border-zinc-700 pl-3 pr-8 py-2 text-sm block w-full rounded-md",
  inputClose:
    "outline-none border-0 absolute right-0 top-1/2 -translate-y-1/2 h-5 w-5 text-red-500 mr-2.5",
  tileTitle: "line-clamp-1 text-sm font-medium text-zinc-700 capitalize",
  titleSubtitle: "flex items-start text-xs text-zinc-500",
  tailing: "px-2",
  actionIcon:
    "text-secondary hover:bg-primary/10 flex items-center justify-center p-1 rounded-full",
};

interface InputProps {
  onClear?(): void;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
  value: string;
}

const Input = ({ value, onChange, onClear }: InputProps) => {
  return (
    <motion.div
      className={className.inputContainer}
      variants={{ show: { opacity: 1, y: 0 }, hide: { opacity: 0, y: -20 } }}
      initial="hide"
      animate="show"
    >
      <input
        className={className.input}
        placeholder={value}
        value={value}
        onChange={onChange}
        type="text"
        autoFocus
      />
      <button
        aria-label="Hide"
        type="button"
        className={className.inputClose}
        onClick={onClear}
      >
        <BiX size={20} />
      </button>
    </motion.div>
  );
};

interface Props {
  user: IUser;
}

export default function EditNickNamesItem({ user }: Props) {
  const userName = getUserName(user);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(userName);

  const avatar = useAvatar({
    user: user,
    className: {
      text: className.avatarText,
      icon: className.avatarText,
      main: className.avatar,
    },
  });
  const { mouseEvent } = useRipple({ className: "bg-primary/30" });

  const onToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    mouseEvent(e);
    if (!open) {
      setOpen(true);
      return;
    }
    console.log(value);
    setOpen(false);
  };

  return (
    <ListTile
      as="li"
      classes={{
        main: className.tileTitles,
      }}
    >
      <ListTile.Leading className={className.leading}>
        {avatar}
      </ListTile.Leading>
      {open ? (
        <ListTile.Title>
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onClear={() => setOpen(false)}
          />
        </ListTile.Title>
      ) : (
        <ListTile.Title className={className.tileTitle}>{value}</ListTile.Title>
      )}
      {!open && (
        <ListTile.Subtitle className={className.titleSubtitle}>
          {true ? "Set nickname" : userName}
        </ListTile.Subtitle>
      )}
      <ListTile.Tailing className={className.tailing}>
        <button
          type="button"
          aria-label={!open ? "Edit nickname" : "Save nickname"}
          className={className.actionIcon}
          onClick={onToggle}
        >
          {open ? <BiCheck size={24} /> : <BiEditAlt size={24} />}
        </button>
      </ListTile.Tailing>
    </ListTile>
  );
}

EditNickNamesItem.displayName = "EditNickNames.Item";
