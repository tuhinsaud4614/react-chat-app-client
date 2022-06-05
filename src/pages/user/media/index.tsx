import * as React from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import { HomePageRoute } from "../home";

// Static path for this page
export const MediaPageRoute = "/media";

const className = {
  root: "",
  container: "",
};

export default function Media() {
  const params = useSearchParams();
  const mediaType = params[0].get("type");
  const conversationId = params[0].get("conversationId");
  const messageId = params[0].get("messageId");

  console.log(mediaType, conversationId, messageId);

  if (!mediaType || !conversationId || !messageId) {
    return <Navigate to={HomePageRoute} replace />;
  }

  return (
    <section className={className.root}>
      <main className={className.container}>Media</main>
    </section>
  );
}

Media.displayName = "Media.Page";
