import * as React from "react";
import { MediaType } from "../../../../utils/types";

export interface MediaAndFilesContextProps {
  onTab(value: MediaType | null): void;
  tab: MediaType | null;
}

const MediaAndFilesContext = React.createContext<MediaAndFilesContextProps>({
  tab: null,
  onTab: () => {},
});

export default MediaAndFilesContext;
