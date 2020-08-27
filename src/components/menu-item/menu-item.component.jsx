import React from 'react'

import {
	MenuItemContainer,
	BackgroundImageContainer,
	ContentContainer,
} from './menu-item.styles'

import { withRouter } from 'react-router-dom'

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
	<MenuItemContainer
		size={size}
		onClick={() => history.push(`${match.url}${linkUrl}`)}>
		<BackgroundImageContainer image={imageUrl} className='background-image' />
		<ContentContainer className='content'>
			<h1>{title.toUpperCase()}</h1>
			<span>SHOP NOW</span>
		</ContentContainer>
	</MenuItemContainer>
)

export default withRouter(MenuItem)
