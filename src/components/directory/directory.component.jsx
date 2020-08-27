import React from 'react'

import MenuItem from '../menu-item/menu-item.component'
import { DirectoryMenuContainer } from './directory.styles'

import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'

import { selectDirectorySections } from '../../redux/directory/directory.selectors'

const Directory = ({ sections }) => {
	return (
		<DirectoryMenuContainer>
			{sections.map(({ id, ...otherSectionProps }) => (
				<MenuItem key={id} {...otherSectionProps} />
			))}
		</DirectoryMenuContainer>
	)
}

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections,
})

export default connect(mapStateToProps)(Directory)
