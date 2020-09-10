import { createSelector } from 'reselect'

const selectShop = (state) => state.shop

export const selectCollections = createSelector(
	[selectShop],
	(shop) => shop.collections
)

export const selectCollection = (collectionUrlParam) =>
	createSelector([selectCollections], (collections) =>
		collections ? collections[collectionUrlParam] : null
	)

export const selectCollectionsForPreview = createSelector(
	[selectCollections],
	(collections) =>
		collections ? Object.keys(collections).map((key) => collections[key]) : []
	//  * 👆 Converting Objects into arrays:
	//  *  		Our collections are objects. First we get the Object keys (the result will be an array).
	// 	*			And then map it we will recieve an array of items that we want to get.
	//  ? Example: Execute this in console 👇
	// 	? line 1 : const data = { hats:{item: 'a'}, bats:{item: 'b'}, cats:{item: 'c'} }
	// 	? line 2 : data[bats]
)
