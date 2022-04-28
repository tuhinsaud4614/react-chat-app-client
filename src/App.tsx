import * as React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Admin from "./pages/admin";
import Auth from "./pages/auth";
import User from "./pages/user";

const useAuth = () => {
  const role: "user" | "admin" = "user";
  return { auth: false, role: role } as const;
};

function App() {
  const { auth, role } = useAuth();
  return (
    <Routes>
      <Route
        path="/*"
        element={
          auth ? (
            role === "user" ? (
              <User />
            ) : (
              <Navigate to="/admin" />
            )
          ) : (
            <Navigate to="/auth/login" />
          )
        }
      />
      <Route path="/auth/*" element={auth ? <Navigate to="/" /> : <Auth />} />
      <Route
        path="/admin/*"
        element={
          auth ? (
            role === "user" ? (
              <Navigate to="/" />
            ) : (
              <Admin />
            )
          ) : (
            <Navigate to="/auth/login" />
          )
        }
      />
    </Routes>
  );
}

export default App;
