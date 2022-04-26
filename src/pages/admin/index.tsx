import * as React from "react";
import { Route, Routes } from "react-router-dom";

const DashboardPage = React.lazy(() => import("./dashboard"));
const NotFoundPage = React.lazy(() => import("./not-found"));

function Admin() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<>...</>}>
            <DashboardPage />
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

export default Admin;
