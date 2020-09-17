import React from 'react'
import { Route } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'
import {
	selectIsCollectionFetching,
	selectIsCollectionsLoaded,
} from '../../redux/shop/shop.selector'

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
		const { match, isCollectionFetching, isCollectionsLoaded } = this.props
		return (
			<div className='shop-page'>
				<Route
					exact
					path={`${match.path}`}
					render={(props) => (
						<CollectionsOverviewWithSpinner
							isLoading={isCollectionFetching} // if true then will show spinner
							{...props}
						/>
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => (
						<CollectionsPageWithSpinner
							isLoading={!isCollectionsLoaded}
							//  ? 👆 we reverse the boolean since we want to stop loading when true;					 							there's an object so we want to stop spinning
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
	isCollectionsLoaded: selectIsCollectionsLoaded,
})

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)
