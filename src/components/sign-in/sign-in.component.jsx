import React, { Component } from 'react'

import FromInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { SignInContainer, ButtonComponent } from './sign-in.styles'

import {
	googleSignInStart,
	emailSignInStart,
} from '../../redux/user/user.actions'

import { connect } from 'react-redux'

class SignIn extends Component {
	state = {
		email: '',
		password: '',
	}

	handleSubmit = async (e) => {
		e.preventDefault()

		const { emailSignInStart } = this.props
		const { email, password } = this.state

		emailSignInStart(email, password)
	}

	handleChange = (e) => {
		const { value, name } = e.target

		this.setState({ [name]: value })
	}

	render() {
		const { googleSignInStart } = this.props

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
}

const mapDispatchToProps = (dispatch) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),

	emailSignInStart: (email, password) =>
		dispatch(emailSignInStart({ email, password })),
})

export default connect(null, mapDispatchToProps)(SignIn)
