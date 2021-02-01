import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import { Context } from "../store/appContext.js";
import { EditContact } from "./EditContact.js";

export const Contacts = () => {

	const [state, setState] = useState({
		showModal: false,
		

	});
	

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						<ContactCard onDelete={(usuario) =>  setState({ showModal: true, id:usuario.id})}  />

					</ul>
				</div>
			</div>
			<Modal id={state.id} show={state.showModal} onClose={() => setState({ showModal: false })} />
			
		
		</div>
	);
};
