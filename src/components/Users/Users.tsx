import React, {ChangeEvent, FC, useState, useMemo, FormEvent} from "react";
import {USERS} from "./usersData";
import {IUser} from './IUser';
import { initialUser } from "./initialUser";

const Users:FC = () => {
	const [users, setUsers] = useState<IUser[]>(USERS);
	const [search, setSearch] = useState('');
	const [showUserForm, setShowUserForm] = useState(false);
	const [user, setUser] = useState(initialUser);
	const [btnName, setBtnName] = useState('Add new User');

	const deleteUser = (id:number) => {
		const isDelete = window.confirm('Do you want realy delete?');
		if(isDelete){
			setUsers(users.filter(user => user.id !== id));
		}
	};

	const searchedUsers = useMemo(() => {
		console.log(users)
		if(search) {
			return users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));
		}
		return users;
	}, [search, users]);

	const onChangeUserData = (event: ChangeEvent<HTMLInputElement>) => {
		const field = event.target.id;
		setUser({...user, [field]: event.target.value});
	};

	const addUser = (event: FormEvent) => {
		event.preventDefault();
		setUsers([...users, user]);
		setUser(initialUser);

	}

	return (
		<>
			<div className="input-group mb-3">
				<span className="input-group-text" id="basic-addon1">Search</span>
				<input type="text" 
					className="form-control" 
					placeholder="Username" 
					aria-label="Username"
					aria-describedby="basic-addon1"
					onChange={(event) => setSearch(event.target.value)}
				/>
			</div>
			<button className="btn btn-success mt-3 mb-3"
				onClick={() => {
					setShowUserForm(!showUserForm);
					}
				}
			>
				{btnName}
			</button>
			{showUserForm 
				&& 
				<form onSubmit={(event) => addUser(event)}>
					{Object.keys(user).map(field =>{
							if(field === 'id' || field === 'address' || field === 'company' || field === 'username') return;
							return <div className="mb-3" key={field}>
										<label htmlFor={field} className="form-label">{field}</label>
										<input type="text" 
												className="form-control" 
												id={field}
												required
												value={user[field as keyof Omit<IUser, 'id' | 'address' | 'company' | 'username'>]}
												onChange={(event) => onChangeUserData(event)}
										/>
									 </div>
						}
					)}

					<button type="submit" className="btn btn-primary mb-2">Add</button>
				</form>
			}
			<div className="row row-cols-1 row-cols-md-3 g-4">
				{searchedUsers.length 
					? 
					searchedUsers.map(user =>
						<div className="col" key={user.id}> 
							<div className="card h-100">
								<div className="card-body">
									<h5 className="card-title">{`#${user.id} - ${user.name}`}</h5>
									<p className="card-text">E-mail: {user.email}</p>
									<p className="card-text">Phone: {user.phone}</p>
									<p className="card-text">WebSite: {user.website}</p>
								</div>
								<div className="card-footer">
									<button type="button" className="btn btn-danger" 
										onClick={() => deleteUser(user.id)}
									>
										Delete
									</button>
								</div>
							</div>
						</div> 
					)
					:
					<h2>Users not exist</h2>
				}
			</div>
		</>
		
	)
}

export default Users;