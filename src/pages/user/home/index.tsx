import ChatBox from "../../../components/User/ChatBox";
import Conversation from "../../../components/User/Home/Conversation";
import useMediaQuery from "../../../hooks/useMediaQuery";

const className = {
  root: "flex bg-zinc-50",
  left: "w-full sm:w-80",
  main: "flex-grow shrink flex border-l w-screen sm:w-[calc(100vw-20rem)]",
};

// Static path for this page
export const HomePageRoute = "/";

export default function Home() {
  const matches = useMediaQuery("(min-width: 640px)");
  return (
    <section className={className.root}>
      <div className={className.left}>
        <Conversation />
      </div>
      {matches && (
        <main className={className.main}>
          <ChatBox conversationId="1" />
        </main>
      )}
    </section>
  );
}

Home.displayName = "Home.Page";
