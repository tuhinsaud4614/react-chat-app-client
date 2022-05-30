import { BsPeopleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { demoImage } from "../../../utils/demo-data";
import Avatar from "../../Avatar";

const className = {
  root: "flex items-center justify-between px-4 py-2.5 w-full",
  avatar: "w-10 h-10 overflow-hidden rounded-full",
  title: "text-lg font-semibold text-secondary flex-1 text-center px-2.5",
  icon: "text-secondary hover:bg-primary/20 flex items-center justify-center w-9 h-9 rounded-full",
};

export default function ConversationHeader() {
  return (
    <header className={className.root}>
      <Link to="/">
        <Avatar image={demoImage} rootClassName={className.avatar} />
      </Link>
      <h2 className={className.title}>Chats</h2>
      <Link to="/" className={className.icon} aria-label="Peoples">
        <BsPeopleFill size={24} />
      </Link>
    </header>
  );
}

ConversationHeader.displayName = "Conversation.Header";
