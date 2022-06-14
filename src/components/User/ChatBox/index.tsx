import * as React from "react";
import { useLocalStorage } from "../../../hooks";
import {
  CHAT_BOX_MEDIA_FILES_OPTIONS,
  CHAT_BOX_OPTIONS,
} from "../../../utils/constants";
import ChatBoxContent from "./Content";
import ChatBoxFooter from "./Footer";
import ChatBoxHeader from "./Header";
import Options from "./Options";

const className = {
  root: "flex",
  left: "h-screen flex-grow shrink flex flex-col",
};

interface Props {
  backButton?: React.ReactNode;
  conversationId: string;
}

export default function ChatBox({ backButton }: Props) {
  const [openOptions, seOpenOptions] = useLocalStorage<boolean>(
    CHAT_BOX_OPTIONS,
    false
  );

  React.useEffect(() => {
    if (!openOptions) {
      window.localStorage.removeItem(CHAT_BOX_MEDIA_FILES_OPTIONS);
    }
  }, [openOptions]);

  return (
    <main className={className.root}>
      <section className={className.left}>
        <ChatBoxHeader
          moreOpen={openOptions}
          onMoreClick={() => seOpenOptions((prev) => !prev)}
          backButton={backButton}
        />
        <ChatBoxContent />
        <ChatBoxFooter />
      </section>
      {openOptions && <Options onClose={() => seOpenOptions(false)} />}
    </main>
  );
}
