import classNames from "classnames";
import * as React from "react";
import { useSplitElement } from "../../hooks";
import SearchContextProvider from "./context";
import SearchInput from "./Input";
import SearchResult from "./Result";
import SearchNavigate from "./SearchNavigate";

interface Props extends React.ComponentPropsWithRef<"div"> {
  classes?: {
    root?: string;
    action?: string;
  };
}

export const SearchBoxComponent = ({ classes, children, ...rest }: Props) => {
  const { restComponents, searchNavigate } = useSplitElement(children, {
    searchNavigate: SearchNavigate,
  });

  return (
    <div {...rest} className={classes?.root}>
      {searchNavigate}
      <section className={classNames("relative", classes?.action)}>
        <SearchContextProvider>{restComponents}</SearchContextProvider>
      </section>
    </div>
  );
};

const SearchBox = Object.assign(SearchBoxComponent, {
  Input: SearchInput,
  Result: SearchResult,
  Navigate: SearchNavigate,
});

export default SearchBox;
