import classNames from "classnames";
import * as React from "react";
import { BsSearch } from "react-icons/bs";
import SearchContextProvider from "./context";
import SearchInput from "./Input";
import SearchResult from "./Result";

const className = {
  root: "relative",
  box: "flex items-center bg-[#868e991a] w-full rounded-3xl h-9",
  btn: "pl-2.5 pr-1.5 select-none md:hidden",
  btnText: "inline-block capitalize text-[#65676B] text-sm ml-1.5",
  wrapper: "flex items-center",
  input: "min-w-0 basis-full p-1.5 outline-none border-0 bg-transparent",
};

interface Props extends React.ComponentPropsWithRef<"button"> {
  classes?: {
    root?: string;
  };
}

const SearchBoxComponent = ({ classes, children, ...rest }: Props) => {
  return (
    <section className={classNames(className.root, classes?.root)}>
      <button
        {...rest}
        className={classNames(className.box, className.btn)}
        type="button"
      >
        <BsSearch size={16} className="text-[#65676B]" />
        <span className={className.btnText}>Search</span>
      </button>
      <div className="relative hidden md:block">
        <SearchContextProvider>{children}</SearchContextProvider>
      </div>
    </section>
  );
};

const SearchBox = Object.assign(
  //   React.memo(SearchBoxComponent, (prev, next) => true),
  SearchBoxComponent,
  {
    Input: SearchInput,
    Result: SearchResult,
  }
);

export default SearchBox;
