import * as React from "react";
import { createContext } from "react";

interface ContextProps {
  onVisible?(value: boolean): void;
  visible: boolean;
  resultRef?: React.RefObject<HTMLDivElement>;
  inputRef?: React.RefObject<HTMLDivElement>;
}

export const SearchBoxContext = createContext<ContextProps>({
  visible: false,
});

interface Props {
  children: React.ReactNode;
}

const SearchContextProvider = ({ children }: Props) => {
  const [visible, setVisible] = React.useState(false);
  const resultRef = React.useRef<HTMLDivElement | null>(null);
  const inputRef = React.useRef<HTMLDivElement | null>(null);

  const onVisible = React.useCallback((value: boolean) => {
    setVisible(value);
  }, []);

  React.useEffect(() => {
    const click = (e: MouseEvent) => {
      if (
        resultRef.current &&
        inputRef.current &&
        (resultRef.current.contains(e.target as Node) ||
          inputRef.current.contains(e.target as Node))
      ) {
        return;
      }
      onVisible && onVisible(false);
    };
    document.addEventListener("click", click);
    return () => {
      document.removeEventListener("click", click);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SearchBoxContext.Provider
      value={{
        visible,
        onVisible: onVisible,
        resultRef: resultRef,
        inputRef: inputRef,
      }}
    >
      {children}
    </SearchBoxContext.Provider>
  );
};

SearchContextProvider.displayName = "SearchContext.Provider";
export default SearchContextProvider;
