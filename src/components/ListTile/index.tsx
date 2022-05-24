import classNames from "classnames";
import * as React from "react";
import { useSplitElement } from "../../hooks";
import Leading from "./Leading";
import Skelton from "./Skelton";
import Subtitle from "./Subtitle";
import Tailing from "./Tailing";
import Title from "./Title";

const className = {
  root: "flex items-center",
  main: "flex-grow min-w-0 flex flex-col justify-center",
};

interface Props extends React.ComponentPropsWithRef<"div"> {
  classes?: {
    root?: string;
    main?: string;
  };
}

const Root = ({ children, className: cls, classes, ...rest }: Props) => {
  const { leading, subtitle, tailing, title } = useSplitElement(children, {
    leading: Leading,
    subtitle: Subtitle,
    title: Title,
    tailing: Tailing,
  });

  return (
    <div {...rest} className={classNames(className.root, classes?.root, cls)}>
      {leading}
      {(title || subtitle) && (
        <div className={classNames(className.main, classes?.main)}>
          {title}
          {subtitle}
        </div>
      )}
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
  Skelton,
});
export default ListTile;
