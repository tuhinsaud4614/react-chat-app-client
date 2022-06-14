import { BsArrowLeft } from "react-icons/bs";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import ChatBox from "../../../components/User/ChatBox";
import { useMediaquery } from "../../../hooks";
import { HomePageRoute } from "../home";

// Static path for this page
export const ConversationPageRoute = "/c/:conversationId";
export const ConversationPageRouteDynamic = (conversationId: string) =>
  `/c/${conversationId}`;

// constant styles
const className = {
  backBtn:
    "text-secondary hover:bg-primary/20 flex items-center justify-center p-1 rounded-full",
};

export default function Conversation() {
  const { conversationId } = useParams<{ conversationId: string }>();

  const navigate = useNavigate();
  const matches = useMediaquery("(min-width: 640px)");

  if (matches) {
    return <Navigate to={HomePageRoute} replace />;
  }

  return (
    <ChatBox
      conversationId={conversationId!}
      backButton={
        <button
          type="button"
          aria-label="Back to home"
          className={className.backBtn}
          onClick={() => {
            navigate(HomePageRoute);
          }}
        >
          <BsArrowLeft size={24} />
        </button>
      }
    />
  );
}

Conversation.displayName = "Conversation.Page";
