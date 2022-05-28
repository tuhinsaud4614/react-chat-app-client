import classNames from "classnames";
import * as React from "react";
import { useSplitElement } from "../../hooks";
import { PolymorphicPropsWithRef, PolymorphicRef } from "../../utils/types";
import Leading from "./Leading";
import Skelton from "./Skelton";
import Subtitle from "./Subtitle";
import Tailing from "./Tailing";
import Title from "./Title";

const className = {
  root: "flex items-center",
  main: "flex-grow min-w-0 flex flex-col justify-center",
};

type Props<T extends React.ElementType> = PolymorphicPropsWithRef<
  T,
  {
    classes?: {
      root?: string;
      main?: string;
    };
  }
>;

const Root: (<T extends React.ElementType = "div">(
  props: Props<T>
) => React.ReactElement | null) & { displayName?: string } = React.forwardRef(
  <T extends React.ElementType = "div">(
    { classes, as, children, ...rest }: Props<T>,
    ref?: PolymorphicRef<T>
  ) => {
    const Component = as || "div";
    const { leading, subtitle, tailing, title } = useSplitElement(children, {
      leading: Leading,
      subtitle: Subtitle,
      title: Title,
      tailing: Tailing,
    });

    return (
      <Component
        {...rest}
        ref={ref}
        className={classNames(className.root, classes?.root, rest?.className)}
      >
        {leading}
        {(title || subtitle) && (
          <div className={classNames(className.main, classes?.main)}>
            {title}
            {subtitle}
          </div>
        )}
        {tailing}
      </Component>
    );
  }
);

Root.displayName = "ListTile";
const ListTile = Object.assign(Root, {
  Leading,
  Subtitle,
  Title,
  Tailing,
  Skelton,
});
export default ListTile;
