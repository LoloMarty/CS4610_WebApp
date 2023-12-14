import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cookies from "universal-cookie";

import Welcome from "./routes/Welcome";
import User from "./routes/User";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Home from "./routes/Home";
import New from "./routes/New";

export default function App() {
  const cookies = new Cookies();

  function handleLogin(token) {
    cookies.set("token", token, { path: "/" });
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Welcome />,
      errorElement: <p>404!</p>,
    },
    {
      path: "/user/:username",
      element: <User token={cookies.get("token").token} />,
    },
    {
      path: "/login",
      element: <Login onLogin={handleLogin} />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home token={cookies.get("token").token} />,
    },
    {
      path: "/new",
      element: <New token={cookies.get("token").token} />,
    },
  ]);

  return <RouterProvider router={router} />;
}
