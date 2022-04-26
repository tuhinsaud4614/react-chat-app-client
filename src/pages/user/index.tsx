import * as React from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = React.lazy(() => import("./home"));
const NotFoundPage = React.lazy(() => import("./not-found"));

function User() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<>...</>}>
            <HomePage />
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
