import { ReactNode } from "react";
import ReactDom from "react-dom";

interface Props {
  children: ReactNode;
}

const isBrowser = typeof window !== "undefined";

const Portal = ({ children }: Props) => {
  if (!isBrowser) {
    return null;
  }

  return ReactDom.createPortal(
    children,
    document.getElementById("presentational") as HTMLElement
  );
};

export default Portal;
