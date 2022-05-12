import classNames from "classnames";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
  children: string;
}

export default function AvatarText({ children, className, ...rest }: Props) {
  return (
    <strong
      {...rest}
      className={classNames(
        "flex items-center justify-center overflow-hidden select-none",
        className
      )}
    >
      {children}
    </strong>
  );
}

AvatarText.displayName = "Avatar.Text";
