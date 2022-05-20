import * as React from "react";
import { useSplitElement } from "../../hooks";
import Leading from "./Leading";
import Subtitle from "./Subtitle";
import Tailing from "./Tailing";
import Title from "./Title";

interface Props extends React.ComponentPropsWithRef<"div"> {}

const Root = ({ children, ...rest }: Props) => {
  const { leading, subtitle, tailing, title } = useSplitElement(children, {
    leading: Leading,
    subtitle: Subtitle,
    title: Title,
    tailing: Tailing,
  });

  return (
    <div {...rest}>
      {leading}
      {title ||
        (subtitle && (
          <div>
            {title}
            {subtitle}
          </div>
        ))}
      {tailing}
    </div>
  );
};

Root.displayName = "ListTile";
const ListTile = Object.assign(Root, {
  Leading,
  Subtitle,
  Title,
  Tailing,
});
export default ListTile;
