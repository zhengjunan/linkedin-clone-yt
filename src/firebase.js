import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC3QM6ro3pLN1fILZsW5SDPUh21huYU7Y4',
  authDomain: 'linkedin-clone-yt-6a1f0.firebaseapp.com',
  projectId: 'linkedin-clone-yt-6a1f0',
  storageBucket: 'linkedin-clone-yt-6a1f0.appspot.com',
  messagingSenderId: '1038518929657',
  appId: '1:1038518929657:web:cb88a8f79e950843207a28',
  measurementId: 'G-68FGLGTH5P',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
