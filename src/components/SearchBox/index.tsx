import classNames from "classnames";
import * as React from "react";
import { splitJSXChild } from "../../utils";
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

const SearchBoxComponent = ({ classes, children, ...rest }: Props) => {
  const { childNavigate, childRest } = React.useMemo(() => {
    let temp: { childNavigate: any; childRest: any[] } = {
      childNavigate: null,
      childRest: [],
    };
    React.Children.toArray(children).forEach((child) => {
      console.log("ok");

      const item = splitJSXChild(child, SearchNavigate);
      if (item) {
        temp.childNavigate = item;
      } else {
        temp.childRest.push(child);
      }
    });
    return temp;
  }, [children]);
  return (
    <div {...rest} className={classes?.root}>
      {childNavigate}
      <section className={classNames("relative", classes?.action)}>
        <SearchContextProvider>{childRest}</SearchContextProvider>
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
