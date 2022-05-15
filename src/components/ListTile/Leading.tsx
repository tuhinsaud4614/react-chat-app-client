import * as React from "react";

interface Props {
  children?: React.ReactNode;
}

export default function Leading({ children }: Props) {
  return <div>{children}</div>;
}

Leading.displayName = "ListTile.Leading";
