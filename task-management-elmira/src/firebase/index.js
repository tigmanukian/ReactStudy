import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyAEFoIo6Rod74Neh0aGBl0PHXsxH8ya208",
	authDomain: "tasks-cb7ce.firebaseapp.com",
	projectId: "tasks-cb7ce",
	storageBucket: "tasks-cb7ce.appspot.com",
	messagingSenderId: "6256218050",
	appId: "1:6256218050:web:514b645dd613d4d62d505b"
};

//init fireBase
firebase.initializeApp(firebaseConfig);

//init services
const projectFireStore = firebase.firestore();

export { projectFireStore };