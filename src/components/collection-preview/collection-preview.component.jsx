import React from 'react'
import {
	CollectionPreviewContainer,
	TitleContainer,
} from './collection-preview.styles'

import CollectionItem from '../collection-item/collection-item.component'

import { withRouter } from 'react-router-dom'

const CollectionPreview = ({ title, items, history, routeName, match }) => (
	<CollectionPreviewContainer>
		<TitleContainer onClick={() => history.push(`${match.url}/${routeName}`)}>
			{title.toUpperCase()}
		</TitleContainer>
		<div>
			{items
				.filter((item, index) => index < 4)
				.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
		</div>
	</CollectionPreviewContainer>
)

export default withRouter(CollectionPreview)
