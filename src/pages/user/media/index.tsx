import { Navigate, useSearchParams } from "react-router-dom";
import MediaSlide from "../../../components/User/MediaSlide";
import { HomePageRoute } from "../home";

// Static path for this page
export const MediaPageRoute = "/media";

const className = {
  root: "",
};

export default function Media() {
  const params = useSearchParams();
  const mediaType = params[0].get("type");
  const conversationId = params[0].get("conversationId");
  const messageId = params[0].get("messageId");

  //

  if (!mediaType || !conversationId || !messageId) {
    return <Navigate to={HomePageRoute} replace />;
  }

  // let slide: React.ReactNode;

  // if (mediaType === "image") {
  //   slide = <ImageSlide />;
  // } else if (mediaType === "video") {
  //   slide = <VideoSlide />;
  // } else {
  //   slide = "document";
  // }

  return (
    <main className={className.root}>
      <MediaSlide />
    </main>
  );
}

Media.displayName = "Media.Page";
