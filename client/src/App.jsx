import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CookiesProvider, useCookies } from "react-cookie";

import User from "./routes/User"
import Login from "./routes/Login"
import Register from "./routes/Register"
import Home from "./routes/Home"
import New from "./routes/New"

const App = () => {
	const [cookies, setCookie] = useCookies(["token"]);

	function handleLogin(token) {
		setCookie("token", token, { path: "/" });
	}

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
			errorElement: <p>404!</p>,
		},
	])

	return (
		<CookiesProvider>
			<RouterProvider router={router} />
		</CookiesProvider>
	)
}

export default App;