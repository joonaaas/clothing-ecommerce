import React from 'react'

import CartItem from '../cart-item/cart-item.component'

import { connect, useDispatch } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import { useHistory } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import {
	CartDropdownContainer,
	CartItemsContainer,
	EmptyMessage,
	GoToCheckoutButton,
} from './cart-dropdown.styles'

const CartDropdown = ({ cartItems }) => {
	const dispatch = useDispatch()
	let history = useHistory()

	const handleCheckoutButton = () => {
		history.push('/checkout')
		dispatch(toggleCartHidden())
	}
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
			<GoToCheckoutButton onClick={handleCheckoutButton}>
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

export default connect(mapStateToProps)(CartDropdown)
