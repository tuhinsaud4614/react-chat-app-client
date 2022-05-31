import * as React from "react";
import { BiLike } from "react-icons/bi";
import { BsCardImage } from "react-icons/bs";
import OptionsItem from "../OptionsItem";
import OptionsItems from "../OptionsItems";
import ChangeChatName from "./ChangeChatName";
import EditNickNames from "./EditNicknames";

interface CustomizeChatProps {}
export default function CustomizeChat({}: CustomizeChatProps) {
  return (
    <OptionsItems title="Customize chat">
      <ChangeChatName />
      <OptionsItem icon={BsCardImage} ariaLabel="Change photo">
        Change photo
        <input accept=".jpg,.png,.jpeg" className="hidden" />
      </OptionsItem>
      <OptionsItem icon={BiLike}>Change emoji</OptionsItem>
      <EditNickNames />
    </OptionsItems>
  );
}

CustomizeChat.displayName = "CustomizeChat";
