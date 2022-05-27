import classNames from "classnames";
import * as React from "react";

const className = "flex-auto";

export default function Body({
  children,
  ...rest
}: React.ComponentPropsWithRef<"div">) {
  return (
    <div {...rest} className={classNames(className, rest.className)}>
      {children}
    </div>
  );
}

Body.displayName = "Modal.Body";
