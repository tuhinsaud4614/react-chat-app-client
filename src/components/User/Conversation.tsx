import ActiveFriends from "./ActiveFriends";
import ConversationHeader from "./ConversationHeader";
import ConversationSearch from "./ConversationSearch";

const className = {
  root: "w-full flex flex-col h-screen",
};

export default function Conversation() {
  return (
    <aside className={className.root}>
      <ConversationHeader />
      <ConversationSearch />
      <ActiveFriends />
      <div className="bg-red-200 basis-full overflow-x-hidden">
        <div className="h-[200vh]">g</div>
      </div>
    </aside>
  );
}
