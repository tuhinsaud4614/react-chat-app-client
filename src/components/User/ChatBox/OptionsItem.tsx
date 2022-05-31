import * as React from "react";
import { useRipple } from "../../../hooks";
import Avatar from "../../Avatar";
import ListTile from "../../ListTile";

const className = {
  item: "mx-4 p-2.5 cursor-pointer hover:bg-primary/10 rounded-2xl",
  icon: "bg-gray-300 rounded-full h-7 w-7 flex items-center justify-center text-neutral-700",
  text: "text-sm text-neutral-700 font-semibold line-clamp-1",
};

interface Props {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  children: React.ReactNode;
  ariaLabel?: string;
  onClick?(): void;
}

export default function OptionsItem({
  icon,
  children,
  ariaLabel,
  onClick,
}: Props) {
  const { mouseEvent } = useRipple({ className: "bg-primary/30" });

  return (
    <ListTile
      as="li"
      role="button"
      aria-label={ariaLabel || children?.toString()}
      className={className.item}
      onClick={(e: React.MouseEvent<HTMLLIElement>) => {
        mouseEvent(e);
        onClick && onClick();
      }}
    >
      <ListTile.Leading className="pr-2">
        <Avatar.Icon rootClassName={className.icon} icon={icon} size={20} />
      </ListTile.Leading>
      <ListTile.Title className={className.text}>{children}</ListTile.Title>
    </ListTile>
  );
}

OptionsItem.displayName = "Options.Item";
