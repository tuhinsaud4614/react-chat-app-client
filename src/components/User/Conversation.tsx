import ConversationHeader from "./ConversationHeader";
import ConversationSearch from "./ConversationSearch";

const className = {
  root: "w-full flex flex-col h-screen",
  searchBox: "px-4 pb-2.5",
  searchInputRoot: "flex items-center bg-[#868e991a] w-full rounded-3xl h-9",
  searchResult: "w-full h-[80vh]",
};

export default function Conversation() {
  return (
    <div className={className.root}>
      <ConversationHeader />
      <ConversationSearch />
      <div className="bg-red-200 basis-full overflow-x-hidden">
        <div className="h-[200vh]">g</div>
      </div>
    </div>
  );
}
