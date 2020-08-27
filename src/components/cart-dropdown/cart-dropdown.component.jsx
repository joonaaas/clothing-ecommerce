import React from 'react'

import CartItem from '../cart-item/cart-item.component'

import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import {
	CartDropdownContainer,
	CartItemsContainer,
	EmptyMessage,
	GoToCheckoutButton,
} from './cart-dropdown.styles'

const CartDropdown = ({ cartItems, history, dispatch }) => {
	return (
		<CartDropdownContainer>
			<CartItemsContainer>
				{cartItems.length ? (
					cartItems.map((cartItem) => (
						<CartItem key={cartItem.id} item={cartItem} />
					))
				) : (
					<EmptyMessage>Your cart is empty</EmptyMessage>
				)}
			</CartItemsContainer>
			<GoToCheckoutButton
				onClick={() => {
					history.push('/checkout')
					dispatch(toggleCartHidden())
				}}>
				GO TO CHECKOUT
			</GoToCheckoutButton>
		</CartDropdownContainer>
	)
}

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
})

// *** WITHOUT DESTRUCTURING *** 👆
//?  const mapStateToProps = (state) => ({
//?	 cartItems: state.cart.cartItems,
//?  }) // check the header component for more info about this comment

export default withRouter(connect(mapStateToProps)(CartDropdown))
