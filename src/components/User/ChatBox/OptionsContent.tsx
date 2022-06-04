import * as React from "react";
import CustomizeChat from "./CustomizeChat";
import MediaAndFiles from "./MediaAndFiles";

const className = {
  root: "py-4",
};

interface Props {
  conversationId: string;
}

export default function OptionsContent({ conversationId }: Props) {
  return (
    <section className={className.root}>
      <CustomizeChat />
      <MediaAndFiles />
    </section>
  );
}

OptionsContent.displayName = "Options.Content";
