const className = {
  root: "flex-grow overflow-y-auto",
};

export default function ChatBoxContent() {
  return (
    <div aria-label="Chat-Box Content" className={className.root}>
      <section className="h-[1000px]">Content</section>
    </div>
  );
}

ChatBoxContent.displayName = "ChatBox.Content";
