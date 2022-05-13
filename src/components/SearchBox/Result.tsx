import classNames from "classnames";
import * as React from "react";
import { SearchBoxContext } from "./context";

const className = {
  root: "absolute top-9 left-0 right-40",
};

interface Props extends React.ComponentPropsWithoutRef<"div"> {
  classes?: {
    root?: string;
  };
}

const SearchResult: React.FC<Props> = ({ classes, children, ...rest }) => {
  const { visible, resultRef } = React.useContext(SearchBoxContext);

  return visible ? (
    <div
      {...rest}
      ref={resultRef}
      className={classNames(className.root, classes?.root)}
    >
      {children}
    </div>
  ) : null;
};

SearchResult.displayName = "Search.Result";

export default SearchResult;
