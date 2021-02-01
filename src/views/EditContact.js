import React, { useContext, useEffect, useState } from "react";
import { Link, matchPath, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditContact = ({ match }) => {
	const [state, setstate] = useState({
	
		
	})
	
	const { store, actions } = useContext(Context);

	let{ id } = match.params;

	useEffect(() => {
	
		let getid = !!store.users && store.users.find(item => item.id === id);
		setstate(getid);
		

	}, []);



	return (
	<div className="container" >
		<div>
			<h1 className="text-center mt-5">Add a new contact</h1>
			<form onSubmit={actions.enviarDatos}>
				<div className="form-group">
					<label>Full Name</label>
					<input type="text" className="form-control" placeholder="Full Name" name="full_name" onChange={actions.handleChange} />
				</div>
				<div className="form-group">
					<label>Email</label>
					<input type="email" className="form-control" placeholder="Enter email" name="email" onChange={actions.handleChange} />
				</div>
				<div className="form-group">
					<label>Phone</label>
					<input type="phone" className="form-control" placeholder="Enter phone" name="phone" onChange={actions.handleChange} />
				</div>
				<div className="form-group">
					<label>Address</label>
					<input type="text" className="form-control" placeholder="Enter address" name="address" onChange={actions.handleChange} />
				</div>
				<button type="button" className="btn btn-primary form-control" onClick={actions.put(id)}>
					save
					</button>
				<Link className="mt-3 w-100 text-center" to="/">
					or get back to contacts
					</Link>
			</form>
		</div>
	</div>
);
};
