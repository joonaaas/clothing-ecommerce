import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
	apiKey: 'AIzaSyA0PMACU2yR3RbSYIU5oqkWpoc3aXLml1A',
	authDomain: 'clothing-db-1a1cb.firebaseapp.com',
	databaseURL: 'https://clothing-db-1a1cb.firebaseio.com',
	projectId: 'clothing-db-1a1cb',
	storageBucket: 'clothing-db-1a1cb.appspot.com',
	messagingSenderId: '520130143262',
	appId: '1:520130143262:web:3c8cd842edc6da0fa2ba0f',
	measurementId: 'G-P06NRP83XP',
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return
	// creates a user object
	const userRef = firestore.doc(`users/${userAuth.uid}`)

	const snapShot = await userRef.get()

	if (!snapShot.exists) {
		const { displayName, email, photoURL } = userAuth
		const createdAt = new Date()

		try {
			await userRef.set({
				displayName,
				email,
				photoURL,
				createdAt,
				...additionalData,
			})
		} catch (error) {
			console.log('Error creating user', error.message)
		}
	}

	return userRef
}

export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	const collectionRef = firestore.collection(collectionKey)

	const batch = firestore.batch()

	objectsToAdd.forEach((obj) => {
		const newDocRef = collectionRef.doc()
		batch.set(newDocRef, obj)
	})

	return await batch.commit() // Fires off the batch. When it succeeds it will resolve a void value/null value
}

export const convertCollectionsSnapshotToMap = (collections) => {
	const transformedCollection = collections.docs.map((doc) => {
		const { title, items } = doc.data()
		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items,
		}
	})
	// ? 👆 returns an array with objects inside [{...}, {...}]
	// console.log(transformedCollection)

	const reducer = (accumulator, collection) => {
		accumulator[collection.title.toLowerCase()] = collection
		//? accumulator with [] is a property. We can assign specific property; KEY
		//? First value will be : 👇
		//* hats : {...}
		return accumulator
	}

	return transformedCollection.reduce(reducer, {})
}

firebase.initializeApp(config)

export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			unsubscribe()
			resolve(userAuth)
		}, reject)
	})
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export default firebase
