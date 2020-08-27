import React from 'react'
import './collection.styles.scss'

import CollectionItem from '../../components/collection-item/collection-item.component'

import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selector'

import { CollectionPageContainer, ItemsContainer } from './collection.styles'

const CollectionPage = ({ collection, match }) => {
	console.log(match.params.collectionId)

	const { title, items } = collection
	return (
		<CollectionPageContainer>
			<h2>{title}</h2>
			<ItemsContainer>
				{items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</ItemsContainer>
		</CollectionPageContainer>
	)
}

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
})

export default connect(mapStateToProps)(CollectionPage)
