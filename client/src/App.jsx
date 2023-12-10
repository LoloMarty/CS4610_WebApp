import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./routes/Login"
import Update from "./routes/Update"
import { UsersContextProvider } from "./context/UsersContext";

const App = () =>
{
	return (
		<UsersContextProvider>
			<div>
				<Router>
					<Routes>
						<Route exact path="/" Component={Login}/>
						<Route exact path="/updateUser/:id/update" Component={Update}/>
					</Routes>
				</Router>
			</div>
		</UsersContextProvider>	
)}

export default App;