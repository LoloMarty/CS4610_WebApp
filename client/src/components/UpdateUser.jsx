import React, { useState, useContext, useEffect } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { UsersContext } from '../context/UsersContext'
import UserFinder from '../api/UserFinder'

const UpdateUser = (props) =>
{
	const {id} = useParams();
	let navigate = useNavigate();
	const {users} = useContext(UsersContext);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => 
	{
		const fetchData = async() =>
		{
			const response = await UserFinder.get(`/${id}`);
			setUsername(response.data.data.user.username)
			setPassword(response.data.data.user.password)
		};
		fetchData();
	}, []);

	const handleSubmit = async (e) =>
	{
		e.preventDefault();
		const updatedUser = await UserFinder.put(`/updateUser/${id}`, {
			username,
			password,
		});
		navigate("/");
	}

	return (
		<div>
			<form action="">
				<div className="form-group">
					<label htmlFor="username">Username</label>
					<input value={username} 
					onChange={e => setUsername(e.target.value)} 
					id="username" 
					className="form-control" 
					type="text" />
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input value={password}
					onChange={e => setPassword(e.target.value)}
					id="password" 
					className="form-control" 
					type="text" />
				</div>
				<button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
			</form>
		</div>
	)
}

export default UpdateUser