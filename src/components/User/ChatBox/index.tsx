import * as React from "react";
import ChatBoxHeader from "./Header";
import Options from "./Options";

const className = {
  root: "flex",
  left: "h-screen flex-grow shrink",
};

interface Props {
  backButton?: React.ReactNode;
  conversationId: string;
}

export default function ChatBox({ backButton }: Props) {
  const [openOptions, seOpenOptions] = React.useState(false);

  return (
    <main className={className.root}>
      <section className={className.left}>
        <ChatBoxHeader
          moreOpen={openOptions}
          onMoreClick={() => seOpenOptions((prev) => !prev)}
          backButton={backButton}
        />
      </section>
      {openOptions && <Options onClose={() => seOpenOptions(false)} />}
    </main>
  );
}
