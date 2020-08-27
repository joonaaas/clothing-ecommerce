import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import { SignUpContainer } from './sign-up.styles'

class SignUp extends React.Component {
	state = {
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
	}

	handleSubmit = async (e) => {
		e.preventDefault()

		const { displayName, email, password, confirmPassword } = this.state
		if (password !== confirmPassword) {
			alert('Passwords dont match')
			return
		}
		if (password.length < 6) {
			alert('Password is too short')
			return
		}
		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			)

			await createUserProfileDocument(user, { displayName })

			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: '',
			})
		} catch (error) {
			console.error(error)
		}
	}

	handleChange = (e) => {
		const { name, value } = e.target
		this.setState({ [name]: value })
	}

	render() {
		const { displayName, email, password, confirmPassword } = this.state
		return (
			<SignUpContainer>
				<h2>I do not have an account</h2>
				<span>Sign up with your email and password</span>
				<form className='sign-up-form' onSubmit={this.handleSubmit}>
					<FormInput
						type='text'
						name='displayName'
						value={displayName}
						onChange={this.handleChange}
						label='Display Name'
						required
					/>
					<FormInput
						type='email'
						name='email'
						value={email}
						onChange={this.handleChange}
						label='Email'
						required
					/>
					<FormInput
						type='password'
						name='password'
						value={password}
						onChange={this.handleChange}
						label='Password'
						required
					/>
					<FormInput
						type='password'
						name='confirmPassword'
						value={confirmPassword}
						onChange={this.handleChange}
						label='Confirm Password'
						required
					/>
					<CustomButton type='submit'>Sign Up</CustomButton>
				</form>
			</SignUpContainer>
		)
	}
}

export default SignUp
