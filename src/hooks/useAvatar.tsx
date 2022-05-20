import * as React from "react";
import { BiUser } from "react-icons/bi";
import Avatar from "../components/Avatar";
import { IUser } from "../utils/interfaces";

interface Props {
  user: IUser;
  className?: {
    icon?: string;
    main?: string;
    text?: string;
  };
}

const useAvatar = ({ user, className }: Props) => {
  if (user.avatar) {
    return <Avatar image={user.avatar} rootClassName={className?.main} />;
  }

  if (user.firstName) {
    return (
      <Avatar.Text className={className?.text}>{user.firstName[0]}</Avatar.Text>
    );
  }

  if (user.lastName) {
    return (
      <Avatar.Text className={className?.text}>{user.lastName[0]}</Avatar.Text>
    );
  }

  return <Avatar.Icon icon={BiUser} rootClassName={className?.icon} />;
};

export default useAvatar;
