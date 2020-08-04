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

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
