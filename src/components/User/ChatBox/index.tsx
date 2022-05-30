import * as React from "react";
import Backdrop from "../../Backdrop";
import ChatBoxHeader from "./Header";

const className = {
  root: "flex",
  left: "h-screen flex-grow shrink",
  right:
    "fixed z-[901] top-0 right-0 bottom-0 h-screen w-3/4 w-min-w-[250px] md1:min-w-[250px] md1:basis-[33%] bg-red-200 ",
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
      {openOptions && (
        <React.Fragment>
          <Backdrop onClick={() => seOpenOptions(false)} />
          <section className={className.right}>hello</section>
        </React.Fragment>
      )}
    </main>
  );
}
