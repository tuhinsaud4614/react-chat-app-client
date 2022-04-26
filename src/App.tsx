import * as React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./pages/admin";
import Auth from "./pages/auth";
import User from "./pages/user";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<User />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/admin/*" element={<Admin />} />
    </Routes>
  );
}

export default App;
