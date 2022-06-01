import * as React from "react";
import { BiLike } from "react-icons/bi";
import OptionsItem from "../OptionsItem";
import OptionsItems from "../OptionsItems";
import ChangeChatName from "./ChangeChatName";
import ChangePhoto from "./ChangePhoto";
import EditNickNames from "./EditNicknames";

// interface CustomizeChatProps {}
// export default function CustomizeChat({}: CustomizeChatProps) {
export default function CustomizeChat() {
  return (
    <OptionsItems title="Customize chat">
      <ChangeChatName />
      <ChangePhoto />
      <OptionsItem icon={BiLike}>Change emoji</OptionsItem>
      <EditNickNames />
    </OptionsItems>
  );
}

CustomizeChat.displayName = "CustomizeChat";
