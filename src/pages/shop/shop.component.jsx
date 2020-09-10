import React from 'react'
import { Route } from 'react-router-dom'

import { connect } from 'react-redux'
import { updateCollections } from '../../redux/shop/shop.actions'

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'

import {
	firestore,
	convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils'

import WithSpinner from '../../components/with-spinner/with-spinner.component'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionsPageWithSpinner = WithSpinner(CollectionPage)
// ? 👆 They need to know whether the component is still loading; Check the <Route/> and analyze

class ShopPage extends React.Component {
	state = {
		loading: true,
	}

	unsubscribeFromSnapshot = null

	componentDidMount() {
		const { updateCollections } = this.props

		const collectionRef = firestore.collection('collections')

		collectionRef.get().then((snapshot) => {
			// console.log(snapshot)
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
			// console.log(collectionsMap)
			updateCollections(collectionsMap)
			// ? 👆 We are getting the data from firebase

			this.setState({ loading: false })
		})
	}

	render() {
		const { match } = this.props
		const { loading } = this.state
		return (
			<div className='shop-page'>
				<Route
					exact
					path={`${match.path}`}
					render={(props) => (
						<CollectionsOverviewWithSpinner isLoading={loading} {...props} />
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => (
						<CollectionsPageWithSpinner isLoading={loading} {...props} />
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

const mapDispatchToProps = (dispatch) => ({
	updateCollections: (collectionsMap) =>
		dispatch(updateCollections(collectionsMap)),
})

export default connect(null, mapDispatchToProps)(ShopPage)
