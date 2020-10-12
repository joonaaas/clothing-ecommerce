import React, { useState } from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { SignInContainer, ButtonComponent } from './sign-in.styles'

import {
	googleSignInStart,
	emailSignInStart,
} from '../../redux/user/user.actions'

import { connect } from 'react-redux'

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
	const [userCredentials, setUserCredentials] = useState({
		email: '',
		password: '',
	})

	const { email, password } = userCredentials

	const handleSubmit = async (e) => {
		e.preventDefault()

		emailSignInStart(email, password)
	}

	const handleChange = (e) => {
		const { value, name } = e.target

		setUserCredentials({ ...userCredentials, [name]: value })
	}

	return (
		<SignInContainer>
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					type='email'
					name='email'
					label='Email'
					value={email}
					handleChange={handleChange}
					required
				/>
				<FormInput
					type='password'
					name='password'
					label='Password'
					value={password}
					handleChange={handleChange}
					required
				/>
				<ButtonComponent>
					<CustomButton type='submit'>Sign In</CustomButton>
					<CustomButton
						type='button'
						onClick={googleSignInStart}
						isGoogleSignIn>
						Sign In with Google
					</CustomButton>
				</ButtonComponent>
			</form>
		</SignInContainer>
	)
}

const mapDispatchToProps = (dispatch) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),

	emailSignInStart: (email, password) =>
		dispatch(emailSignInStart({ email, password })),
})

export default connect(null, mapDispatchToProps)(SignIn)
