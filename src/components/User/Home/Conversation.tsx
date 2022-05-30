import ActiveFriends from "./ActiveFriends";
import ConversationHeader from "./ConversationHeader";
import ConversationItems from "./ConversationItems";
import ConversationSearch from "./ConversationSearch";

const className = {
  root: "w-full flex flex-col h-screen",
  items: "basis-full overflow-x-hidden",
};

export default function Conversation() {
  return (
    <aside className={className.root}>
      <ConversationHeader />
      <ConversationSearch />
      <ActiveFriends />
      <div className={className.items}>
        <ConversationItems />
      </div>
    </aside>
  );
}
