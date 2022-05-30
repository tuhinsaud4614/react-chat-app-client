import ChatBox from "../../../components/User/ChatBox";
import Conversation from "../../../components/User/Home/Conversation";
import useMediaQuery from "../../../hooks/useMediaQuery";

const className = {
  root: "flex bg-zinc-50",
  left: "w-full sm:max-w-xs",
  main: "flex-grow shrink border-l",
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
        <div className={className.main}>
          <ChatBox conversationId="1" />
        </div>
      )}
    </section>
  );
}

Home.displayName = "Home.Page";
