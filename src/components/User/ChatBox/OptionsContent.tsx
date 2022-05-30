import * as React from "react";

const className = {
  root: "py-4",
};

interface Props {
  conversationId: string;
}

export default function OptionsContent({ conversationId }: Props) {
  return <section className={className.root}>content</section>;
}

OptionsContent.displayName = "ChatBox.Options.Content";
