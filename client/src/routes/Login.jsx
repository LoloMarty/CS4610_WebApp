import React from "react";
import Header from "../components/Header";
import AddUser from "../components/Register";
import UserList from "../components/UserList";

const Login = () =>
{
	return (
	<div>
		<Header />
		<AddUser />
		<UserList />
	</div>
	);
};

export default Login