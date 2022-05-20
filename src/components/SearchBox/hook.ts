import * as React from "react";
import { SearchBoxContext } from "./context";

export default function useSearchBox() {
  const { onVisible } = React.useContext(SearchBoxContext);
  return { onHideVisible: onVisible } as const;
}
