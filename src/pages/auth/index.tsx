import * as React from "react";
import { Route, Routes } from "react-router-dom";
import AuthWrapper from "../../components/Auth";

const LoginPage = React.lazy(() => import("./login"));
const RegisterPage = React.lazy(() => import("./register"));
const NotFoundPage = React.lazy(() => import("../user/not-found"));

function Auth() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <React.Suspense fallback={<>...</>}>
            <AuthWrapper>
              <LoginPage />
            </AuthWrapper>
          </React.Suspense>
        }
      />
      <Route
        path="/register"
        element={
          <React.Suspense fallback={<>...</>}>
            <AuthWrapper>
              <RegisterPage />
            </AuthWrapper>
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

export default Auth;
