import ConversationHeader from "./ConversationHeader";

const className = {
  root: "w-full",
};

export default function Conversation() {
  return (
    <div className={className.root}>
      <ConversationHeader />
    </div>
  );
}
