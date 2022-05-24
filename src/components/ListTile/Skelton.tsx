import classNames from "classnames";
import * as React from "react";

const className = {
  root: "flex items-center animate-pulse",
  main: "flex-grow min-w-0 flex flex-col justify-center",
};

interface Props extends Omit<React.ComponentPropsWithRef<"div">, "children"> {
  classes?: {
    root?: string;
    leading?: string;
    content?: string;
    title?: string;
    subtitle?: string;
    tailing?: string;
  };
}

export default function Skelton({ classes, ...rest }: Props) {
  return (
    <div
      {...rest}
      className={classNames(className.root, classes?.root, rest.className)}
    >
      {classes?.leading && <span className={classes?.leading} />}
      {(classes?.title || classes?.subtitle) && (
        <div className={classNames(className.main, classes?.content)}>
          {classes?.title && <span className={classes?.title} />}
          {classes?.subtitle && <span className={classes?.subtitle} />}
        </div>
      )}
      {classes?.tailing && <span className={classes?.tailing} />}
    </div>
  );
}

Skelton.displayName = "ListTile.Skelton";
