import * as React from "react";

const className = {
  root: "relative basis-1/3",
  container: "pb-[100%]",
};

interface Props {
  children?: React.ReactNode;
}

export default function TabContentItem({ children }: Props) {
  return (
    <li className={className.root}>
      <div className={className.container}>{children}</div>
    </li>
  );
}

TabContentItem.displayName = "MediaAndFiles.TabContentItem";
