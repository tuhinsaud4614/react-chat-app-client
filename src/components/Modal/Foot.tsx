import classNames from "classnames";
import * as React from "react";

const className = "rounded-bl-2xl rounded-br-2xl";

export default function Foot({
  children,
  ...rest
}: React.ComponentPropsWithRef<"div">) {
  return (
    <div {...rest} className={classNames(className, rest.className)}>
      {children}
    </div>
  );
}

Foot.displayName = "Modal.Foot";
