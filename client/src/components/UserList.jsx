import React, {useContext, useEffect} from "react";
import UserFinder from "../api/UserFinder"	//tempname for home api
import { UsersContext } from "../context/UsersContext";
import { useNavigate } from "react-router-dom"

const UserList = (props) =>
{
	const {users, setUsers} = useContext(UsersContext);
	let navigate = useNavigate()
	useEffect(() => {
		const fetchData = async () =>
		{
			try {
				const response = await UserFinder.get("/");
				setUsers(response.data.data.users);
			} catch (err) {}
		}
		fetchData();
	}, [])

	const handleDelete = async (id) =>
	{
		try {
			const response = await UserFinder.delete(`/deleteUser/${id}`);
			setUsers(users.filter(user => {
				return user.id !== id
			}))
		} catch (err) {}
	}
	const handleEdit = async (id) =>
	{
		navigate(`/updateUser/${id}/update`);
	};

	return (
		<div className="list-group">
			<table className="table table-hover table-dark">
				<thead>
					<tr className="bg-primary">
						<th scope="col">User</th>
						<th scope="col">Edit</th>
						<th scope="col">Delete</th>
					</tr>	
				</thead>
				<tbody>
					{users && users.map((user) => {
						return  (
							<tr key={user.id}>
								<td>{user.username}</td>
								<td>
									<button onClick={() => handleEdit(user.id)} className="btn btn-warning">Edit</button>
								</td>
								<td>
									<button onClick={() => handleDelete(user.id)} className="btn btn-danger">Delete</button>
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}
export default UserList