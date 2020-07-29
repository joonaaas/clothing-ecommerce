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

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
