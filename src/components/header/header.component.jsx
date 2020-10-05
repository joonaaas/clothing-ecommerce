import React from 'react'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { signOutStart } from '../../redux/user/user.actions'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionLink,
} from './header.styles'

const Header = ({ currentUser, hidden, signOutStart }) => {
	return (
		<>
			<HeaderContainer>
				<LogoContainer to='/'>
					<Logo className='logo' />
				</LogoContainer>

				<OptionsContainer>
					<OptionLink to='/shop'>SHOP</OptionLink>

					<OptionLink to='/contact'>CONTACT</OptionLink>

					{currentUser ? (
						<OptionLink as='div' onClick={() => signOutStart()}>
							SIGN OUT
						</OptionLink>
					) : (
						<OptionLink to='/signin'>SIGN IN</OptionLink>
					)}

					<CartIcon />
				</OptionsContainer>

				{hidden ? null : <CartDropdown />}
			</HeaderContainer>

			{/* 
			// ? BEFORE 👇 -- and -- AFTER 👆
			<div className='header'>
				<Link className='logo-container' to='/'>
					<Logo className='logo' />
				</Link>

				<div className='options'>
					<Link to='/shop' className='option'>
						SHOP
					</Link>

					<Link to='/contact' className='option'>
						CONTACT
					</Link>

					{currentUser ? (
						<div className='option' onClick={() => auth.signOut()}>
							SIGN OUT
						</div>
					) : (
						<Link className='option' to='/signin'>
							SIGN IN
						</Link>
					)}

					<CartIcon />
				</div>
				{hidden ? null : <CartDropdown />}
			</div>  
			*/}
		</>
	)
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
})

// *** BEFORE MEMOIZATION *** 👆
//? const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
//? 	currentUser,
//? 	hidden,
//? })

// *** WITHOUT DESTRUCTURING *** 👆
//?  const mapStateToProps = (state) => ({
//?	 currentUser: state.user.currentUser,
//?	 hidden: state.cart.hidden,
//?  })

const mapDispatchToProps = (dispatch) => ({
	signOutStart: () => dispatch(signOutStart()),
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)
