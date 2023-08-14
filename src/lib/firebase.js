import { FirebaseApp } from 'sveltefire';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const provider = new GoogleAuthProvider();

// Initialize Firebase
export const app = initializeApp({
	apiKey: "AIzaSyAtDKR5I37ekCTnU7qvABzzD6Oj4QqbOFc",
	authDomain: "sezimi.firebaseapp.com",
	projectId: "sezimi",
	storageBucket: "sezimi.appspot.com",
	messagingSenderId: "892819239644",
	appId: "1:892819239644:web:39a8dd2c786fb49d50fa19",
	measurementId: "G-H15MK1Y25N"
});
export const firestore = getFirestore(app);
export const auth = getAuth(app);