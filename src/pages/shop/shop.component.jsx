import React from 'react'
import { Route } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'
import { selectIsCollectionFetching } from '../../redux/shop/shop.selector'

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'

import WithSpinner from '../../components/with-spinner/with-spinner.component'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionsPageWithSpinner = WithSpinner(CollectionPage)
// ? 👆 They need to know whether the component is still loading; Check the <Route/> and analyze

class ShopPage extends React.Component {
	componentDidMount() {
		const { fetchCollectionsStartAsync } = this.props
		fetchCollectionsStartAsync()
	}

	render() {
		const { match, isCollectionFetching } = this.props
		return (
			<div className='shop-page'>
				<Route
					exact
					path={`${match.path}`}
					render={(props) => (
						<CollectionsOverviewWithSpinner
							isLoading={isCollectionFetching}
							{...props}
						/>
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => (
						<CollectionsPageWithSpinner
							isLoading={isCollectionFetching}
							{...props}
						/>
					)}
				/>
			</div>
		)
		// *** BEFORE *** 👇
		// <Route exact path={`${match.path}`} component={CollectionsOverview} />
		// <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
		// ? we put render={} in the <Route/> props instead of component={}; edited in folder (17.HOC, Video.2)
	}
}

const mapStateToProps = createStructuredSelector({
	isCollectionFetching: selectIsCollectionFetching,
})

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)
