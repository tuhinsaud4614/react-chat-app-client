import ChatBoxHeader from "./Header";

const className = {
  root: "h-screen w-full",
};

export default function ChatBox() {
  return (
    <main className={className.root}>
      <ChatBoxHeader />
    </main>
  );
}
