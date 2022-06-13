import * as React from "react";
import { BiChevronLeft } from "react-icons/bi";

const className = {
  root: "absolute bottom-full w-max right-0 bg-white rounded-md shadow-mine-2 text-neutral-700 flex flex-col",
  items: "list-none mx-4 mb-2.5 flex flex-col",
};

interface Props {
  backBtnProps: React.ButtonHTMLAttributes<HTMLButtonElement>;
  children?: React.ReactNode;
}

export default function SettingsItem({ backBtnProps, children }: Props) {
  return (
    <div className={className.root}>
      <button
        {...backBtnProps}
        type="button"
        className="flex items-center px-2.5 py-1"
      >
        <BiChevronLeft size={20} />
        <span>{backBtnProps.children}</span>
      </button>
      <div className={className.items}>{children}</div>
    </div>
  );
}

SettingsItem.displayName = "Video.Settings.Item";
