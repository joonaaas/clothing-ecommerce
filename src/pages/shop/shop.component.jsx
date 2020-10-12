import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchCollectionsStart } from '../../redux/shop/shop.actions'

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionContainer from '../collection/collection.container'

const ShopPage = ({ match, fetchCollectionsStart }) => {
	useEffect(() => {
		fetchCollectionsStart()
	}, [fetchCollectionsStart])
	// ? this will execute if [fetchCollectionsStart] change

	return (
		<div className='shop-page'>
			<Route
				exact
				path={`${match.path}`}
				component={CollectionsOverviewContainer}
				// ? 👆 before 👇
				// render={(props) => (
				// 	<CollectionsOverviewWithSpinner
				// 		isLoading={isCollectionFetching} // if true then will show spinner
				// 		{...props}
				// 	/>
				// )}
			/>
			<Route
				path={`${match.path}/:collectionId`}
				component={CollectionContainer}
				// ? 👆 before 👇
				// render={(props) => (
				// 	<CollectionsPageWithSpinner
				// 		isLoading={!isCollectionsLoaded}
				// 		  ? 👆 we reverse the boolean since we want to stop loading when true;					 							there's an object so we want to stop spinning
				// 		{...props}
				// 	/>
				// )}
			/>
		</div>
	)
	// *** BEFORE *** 👇
	// <Route exact path={`${match.path}`} component={CollectionsOverview} />
	// <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
	// ? we put render={} in the <Route/> props instead of component={}; edited in folder (17.HOC, Video.2)
}

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
})

export default connect(null, mapDispatchToProps)(ShopPage)
