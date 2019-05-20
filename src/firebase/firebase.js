
import * as firebase from 'firebase';

// Setup for deployment on Heroku
const firebaseConfig = {
  apiKey: JSON.stringify(process.env.FIREBASE_API_KEY),
  authDomain: JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
  databaseURL: JSON.stringify(process.env.FIREBASE_DATABASE_URL),
  projectId: JSON.stringify(process.env.FIREBASE_PROJECT_ID),
  storageBucket: JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
  messagingSenderId: JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
  appId: JSON.stringify(process.env.FIREBASE_APP_ID)
};

// Gives us access to our database
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };