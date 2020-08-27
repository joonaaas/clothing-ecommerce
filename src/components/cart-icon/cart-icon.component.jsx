import React from 'react'

import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'

import {
	CartIconContainer,
	ShoppingIconLogo,
	ItemCountContainer,
} from './cart-icon.styles'

const CartIcon = ({ toggleCartHidden, itemCount }) => {
	return (
		<CartIconContainer onClick={toggleCartHidden}>
			<ShoppingIconLogo />
			<ItemCountContainer>{itemCount}</ItemCountContainer>
		</CartIconContainer>
	)
}

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
})

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount,
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
