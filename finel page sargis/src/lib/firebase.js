import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// const apiKey = process.env.REACT_APP_API_KEY;
// const authDomain = process.env.REACT_APP_AUTH_DOMAIN;
// const projectId = process.env.REACT_APP_PROJECT_ID;
// const storageBucket = process.env.REACT_APP_STORAGE_BUCKET;
// const messagingSenderId = process.env.REACT_APP_MESSAGING_SENDER_ID;
// const appId = process.env.REACT_APP_APP_ID;

// const firebaseConfig = {
//   apiKey,
//   authDomain,
//   projectId,
//   storageBucket,
//   messagingSenderId,
//   appId,
// };
const firebaseConfig = {
  apiKey: 'AIzaSyBuI3iAlO7zaH96CBFOXkDJjHahvVxd0zY',
  authDomain: 'classroom-e5b7c.firebaseapp.com',
  projectId: 'classroom-e5b7c',
  storageBucket: 'classroom-e5b7c.appspot.com',
  messagingSenderId: '560093791778',
  appId: '1:560093791778:web:a8f37070127346f2072c7b',
};

const fireBaseApp = initializeApp(firebaseConfig);

export const firestore = getFirestore(fireBaseApp);

export default fireBaseApp;
