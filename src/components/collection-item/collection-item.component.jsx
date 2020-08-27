import React from 'react'

import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'

import {
	CollectionItemContainer,
	BorderImage,
	Image,
	CollectionFooter,
	Price,
	Name,
	AddToCart,
} from './collection-item.styles'

const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item

	return (
		<CollectionItemContainer>
			<BorderImage>
				<Image image={imageUrl} />
			</BorderImage>
			<CollectionFooter>
				<Name>{name}</Name>
				<Price>${price}</Price>
			</CollectionFooter>
			<AddToCart onClick={() => addItem(item)} inverted>
				ADD TO CART
			</AddToCart>
		</CollectionItemContainer>
	)
}

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
})

export default connect(null, mapDispatchToProps)(CollectionItem)
