import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Form, Button, Row, Col } from 'react-bootstrap';

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('/user/', {
			username: this.state.username,
			password: this.state.password
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({
						redirectTo: '/login'
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}

render() {
	if (this.state.redirectTo) {
		return <Redirect to={{ pathname: this.state.redirectTo }} />
	}
	return (
		<Form>
			<br></br>
			<h3>Create Account</h3>
			<br></br>
			<Form.Group as={Row} controlId="formPlaintextUsername" className="justify-content-center">
				<Form.Label column sm="1">
					Username
				</Form.Label>
				<Col sm="2">
					<Form.Control type="text" id="username" name="username" value={this.state.username} onChange={this.handleChange}/>
				</Col>
			</Form.Group>

			<Form.Group as={Row} controlId="formPlaintextPassword" className="justify-content-center">
				<Form.Label column sm="1">
					Password
				</Form.Label>
				<Col sm="2">
					<Form.Control type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
				</Col>
			</Form.Group>
			<Button variant="dark" type="submit" onClick={this.handleSubmit}>
				Submit
			</Button>
		</Form>
	)
}
}

export default Signup
