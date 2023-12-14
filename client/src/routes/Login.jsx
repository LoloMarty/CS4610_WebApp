import React from "react";
import Header from "../components/Header";

export default function Login({onLogin}) {
	function handleSubmit(event) {
		event.preventDefault();
		onLogin({ token });
	  }

	return (
		<div>
			
		</div>
	);
};