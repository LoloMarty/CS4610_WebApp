import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./routes/Login"
import Update from "./routes/Update"
import User from "./routes/User"
import Register from "./routes/Register"
import Home from "./routes/Home"
import New from "./routes/New"
import { UsersContextProvider } from "./context/UsersContext";

const App = () => {
	return (
		<UsersContextProvider>
			<div>
				<Router>
					<Routes>
						<Route exact path="/user/:username" Component={User} />
						<Route exact path="/test/login" Component={Login} />
						<Route exact path="/test/register" Component={} />
						<Route exact path="/test/home" Component={} />
						<Route exact path="/test/new" Component={} />
					</Routes>
				</Router>
			</div>
		</UsersContextProvider>
	)
}

export default App;