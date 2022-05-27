import * as React from "react";
import { Route, Routes } from "react-router-dom";
import USER_PATHS from "./routes";

const HomePage = React.lazy(() => import("./home"));
const ExplorerPage = React.lazy(() => import("./explore"));
const NotFoundPage = React.lazy(() => import("./not-found"));

function User() {
  return (
    <Routes>
      <Route
        path={USER_PATHS.home}
        element={
          <React.Suspense fallback={<>...</>}>
            <HomePage />
          </React.Suspense>
        }
      />
      <Route
        path={USER_PATHS.explore}
        element={
          <React.Suspense fallback={<>...</>}>
            <ExplorerPage />
          </React.Suspense>
        }
      />

      <Route
        path={USER_PATHS.notFound}
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
