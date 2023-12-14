import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CookiesProvider, useCookies } from "react-cookie";

import Welcome from "./routes/Welcome";
import User from "./routes/User";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Home from "./routes/Home";
import New from "./routes/New";

export default function App() {
  const [cookies, setCookie] = useCookies(["token"]);

  function handleLogin(token) {
    setCookie("token", token, { path: "/" });
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Welcome />,
      errorElement: <p>404!</p>,
    },
    {
      path: "/user/:username",
      element: <User token={cookies.token.token} />,
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
      element: <Home token={cookies.token.token} />,
    },
    {
      path: "/new",
      element: <New token={cookies.token.token} />,
    },
  ]);

  return (
    <CookiesProvider>
      <RouterProvider router={router} />
    </CookiesProvider>
  );
}
