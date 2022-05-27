import * as React from "react";

interface ContextProps {
  onHide?(): void;
}

const ModalContext = React.createContext<ContextProps>({});
export default ModalContext;
