import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { ConversationPageRoute } from "./conversation";
import { ExplorePageRoute } from "./explore";
import { HomePageRoute } from "./home";

const HomePage = React.lazy(() => import("./home"));
const ExplorerPage = React.lazy(() => import("./explore"));
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
