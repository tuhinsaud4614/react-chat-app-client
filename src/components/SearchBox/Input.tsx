import classNames from "classnames";
import * as React from "react";
import { BsArrowLeft, BsSearch } from "react-icons/bs";
import { SearchBoxContext } from "./context";

const className = {
  wrapper: "flex items-center",
  input: "min-w-0 basis-full py-1.5 px-2 outline-none border-0 bg-transparent",
  back: "text-secondary hover:bg-primary/20 flex items-center justify-center p-1 rounded-full mr-2",
};

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  classes?: {
    root?: string;
    wrapper?: string;
    input?: string;
    backBtn?: string;
  };
}

const SearchInput: React.FC<Props> = ({
  classes,
  onBlur,
  onFocus,
  ...rest
}) => {
  const { visible, onVisible, inputRef } = React.useContext(SearchBoxContext);
  const [focus, setFocus] = React.useState(false);

  const focusHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocus(true);
    onVisible && onVisible(true);
    onFocus && onFocus(e);
  };

  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocus(false);
    onBlur && onBlur(e);
  };

  console.log("Input Render");

  return (
    <div className={classNames(className.wrapper, classes?.wrapper)}>
      {visible && (
        <button
          type="button"
          className={classNames(className.back, classes?.backBtn)}
          onClick={() => {
            onVisible && onVisible(false);
          }}
        >
          <BsArrowLeft size={24} />
        </button>
      )}
      <div
        className={classNames("overflow-hidden", classes?.root)}
        ref={inputRef}
      >
        {!focus && (
          <BsSearch size={16} className="text-[#65676B] inline-block ml-2.5" />
        )}
        <input
          {...rest}
          onFocus={focusHandler}
          onBlur={blurHandler}
          type="search"
          className={classNames(className.input, classes?.input)}
        />
      </div>
    </div>
  );
};

SearchInput.displayName = "Search.Input";

export default SearchInput;
