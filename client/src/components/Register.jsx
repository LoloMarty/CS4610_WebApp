import React, { useState, useContext } from 'react'
import UserFinder from '../api/UserFinder'
import { UsersContext } from '../context/UsersContext'

const Register = () => {
	const {addUsers} = useContext(UsersContext);
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	
	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const response = await UserFinder.post("/addUser", {
				username,
				password
			});
			addUsers(response.data.data.users)
			console.log(response);
		} catch (err) {}
	}

	return (
		<div className='mb-4'>
			<form action=''>
				<div className='form-row'>
				<div className='row'>
					<input 
					value={username} 
					onChange={e => setUsername(e.target.value)} 
					type="text" 
					className="form-control" 
					placeholder="Username"/>
				</div>
					<input value={password} 
					onChange={e => setPassword(e.target.value)} 
					className="form-control" 
					type="text" 
					placeholder="Password"/>
				</div>
				<button className='btn btn-primary'>Sign In</button>
				<button onClick={handleSubmit} type="submit" className='btn btn-secondary'>Sign Up</button>
			</form>
		</div>
	)
}

export default Register