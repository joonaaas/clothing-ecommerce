import React, { Component } from 'react'

import FromInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

import { SignInContainer, ButtonComponent } from './sign-in.styles'

class SignIn extends Component {
	state = {
		email: '',
		password: '',
	}

	handleSubmit = async (e) => {
		e.preventDefault()
		const { email, password } = this.state

		try {
			await auth.signInWithEmailAndPassword(email, password)
			this.setState({ email: '', password: '' })
		} catch (error) {
			console.error(error)
		}
	}

	handleChange = (e) => {
		const { value, name } = e.target

		this.setState({ [name]: value })
	}

	render() {
		return (
			<SignInContainer>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FromInput
						type='email'
						name='email'
						label='Email'
						value={this.state.email}
						handleChange={this.handleChange}
						required
					/>
					<FromInput
						type='password'
						name='password'
						label='Password'
						value={this.state.password}
						handleChange={this.handleChange}
						required
					/>
					<ButtonComponent>
						<CustomButton type='submit'>Sign In</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Sign In with Google
						</CustomButton>
					</ButtonComponent>
				</form>
			</SignInContainer>
		)
	}
}

export default SignIn
