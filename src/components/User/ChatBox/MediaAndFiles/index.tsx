import * as React from "react";
import { BiFile, BiImage, BiVideo } from "react-icons/bi";
import { useLocalStorage } from "../../../../hooks";
import { MediaType } from "../../../../utils/types";
import OptionsItem from "../OptionsItem";
import OptionsItems from "../OptionsItems";
import Container from "./Container";
import MediaAndFilesContext from "./context";
import Documents from "./Documents";
import Header from "./Header";
import Images from "./Images";
import TabPanel from "./TabPanel";
import Tabs from "./Tabs";
import Videos from "./Videos";

// interface CustomizeChatProps {}
// export default function CustomizeChat({}: CustomizeChatProps) {
export default function MediaAndFiles() {
  const [tab, setTab] = useLocalStorage<MediaType | null>(
    "chatBox_media_files_options",
    null
  );

  const tabHandler = (value: MediaType | null) => {
    setTab(value);
  };

  let tabPanelContent;

  switch (tab) {
    case "IMAGES":
      tabPanelContent = <Images />;
      break;
    case "VIDEOS":
      tabPanelContent = <Videos />;
      break;

    case "DOCUMENTS":
      tabPanelContent = <Documents />;
      break;
    default:
      tabPanelContent = null;
      break;
  }

  return (
    <React.Fragment>
      <OptionsItems title="Images, videos & document">
        <OptionsItem icon={BiImage} onClick={() => setTab("IMAGES")}>
          Images
        </OptionsItem>
        <OptionsItem icon={BiVideo} onClick={() => setTab("VIDEOS")}>
          Videos
        </OptionsItem>
        <OptionsItem icon={BiFile} onClick={() => setTab("DOCUMENTS")}>
          Documents
        </OptionsItem>
      </OptionsItems>
      <MediaAndFilesContext.Provider value={{ tab: tab, onTab: tabHandler }}>
        <Container>
          <Header />
          <Tabs />
          <TabPanel>{tabPanelContent}</TabPanel>
        </Container>
      </MediaAndFilesContext.Provider>
    </React.Fragment>
  );
}
