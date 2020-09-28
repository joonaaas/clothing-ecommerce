import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'

import WithSpinner from '../../components/with-spinner/with-spinner.component'
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selector'
import CollectionPage from '../collection/collection.component'

const mapStateToProps = createStructuredSelector({
	isLoading: (state) => !selectIsCollectionsLoaded(state),
})

const CollectionContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionPage)
// ? 👆 same 👇
// connect(mapStateToProps)(
// 	WithSpinner(CollectionPage)
// )

export default CollectionContainer
