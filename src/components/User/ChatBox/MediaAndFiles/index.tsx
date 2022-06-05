import * as React from "react";
import { BiFile, BiImage, BiVideo } from "react-icons/bi";
import { MediaType } from "../../../../utils/types";
import OptionsItem from "../OptionsItem";
import OptionsItems from "../OptionsItems";
import Container from "./Container";
import Header from "./Header";
import TabPanel from "./TabPanel";
import Tabs from "./Tabs";

// interface CustomizeChatProps {}
// export default function CustomizeChat({}: CustomizeChatProps) {
export default function MediaAndFiles() {
  const [tab, setTab] = React.useState<MediaType | null>(null);

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
      <Container tab={tab}>
        <Header onClose={() => setTab(null)} />
        <Tabs tab={tab} onTab={(value) => setTab(value)} />
        <TabPanel tab={tab}>{tab}</TabPanel>
      </Container>
    </React.Fragment>
  );
}
