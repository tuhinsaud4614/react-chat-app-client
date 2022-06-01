import * as React from "react";
import OptionsItems from "../OptionsItems";
import ChangeChatName from "./ChangeChatName";
import ChangeEmoji from "./ChangeEmoji";
import ChangePhoto from "./ChangePhoto";
import EditNickNames from "./EditNicknames";

// interface CustomizeChatProps {}
// export default function CustomizeChat({}: CustomizeChatProps) {
export default function CustomizeChat() {
  return (
    <OptionsItems title="Customize chat">
      <ChangeChatName />
      <ChangePhoto />
      <ChangeEmoji />
      <EditNickNames />
    </OptionsItems>
  );
}

CustomizeChat.displayName = "CustomizeChat";
