import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { ConversationPageRoute } from "./conversation";
import { ExplorePageRoute } from "./explore";
import { HomePageRoute } from "./home";
import { ImagesPageRoute } from "./images";

const HomePage = React.lazy(() => import("./home"));
const ExplorerPage = React.lazy(() => import("./explore"));
const ImagesPage = React.lazy(() => import("./images"));
const ConversationPage = React.lazy(() => import("./conversation"));
const NotFoundPage = React.lazy(() => import("./not-found"));

function User() {
  return (
    <Routes>
      <Route
        path={HomePageRoute}
        element={
          <React.Suspense fallback={<>...</>}>
            <HomePage />
          </React.Suspense>
        }
      />
      <Route
        path={ExplorePageRoute}
        element={
          <React.Suspense fallback={<>...</>}>
            <ExplorerPage />
          </React.Suspense>
        }
      />
      <Route
        path={ImagesPageRoute}
        element={
          <React.Suspense fallback={<>...</>}>
            <ImagesPage />
          </React.Suspense>
        }
      />
      <Route
        path={ConversationPageRoute}
        element={
          <React.Suspense fallback={<>...</>}>
            <ConversationPage />
          </React.Suspense>
        }
      />

      <Route
        path="*"
        element={
          <React.Suspense fallback={<>...</>}>
            <NotFoundPage />
          </React.Suspense>
        }
      />
    </Routes>
  );
}

export default User;
