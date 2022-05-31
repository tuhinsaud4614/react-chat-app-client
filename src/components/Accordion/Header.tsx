import * as React from "react";

type Props = { expanded: boolean } & React.ComponentPropsWithRef<"header">;

export default function Header({ expanded, ...rest }: Props) {
  return <header {...rest} />;
}

Header.displayName = "Accordion.Header";
