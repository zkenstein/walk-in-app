import React from 'react';
import {Link} from 'react-router';

export default class Home extends React.Component {
	render() {
		return (
			<div>
				<h1>This is the home page</h1>
				<Link className="button" to="/login">Login</Link>
				<br/>
				<br/>
				<Link className="button" to="/createUser">Create User</Link>
			</div>
		)
	}
}