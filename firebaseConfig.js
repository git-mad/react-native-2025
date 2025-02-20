import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
import {getAuth} from "firebase/auth";
// import {...} from "firebase/database";
import {getFirestore} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyB2kjur2asZgDhAZOQKNT5UrNH8tdvm0U8',
  authDomain: 'maas-first-app.firebaseapp.com',
  databaseURL: 'https://maas-first-app.firebaseio.com',
  projectId: 'maas-first-app',
  storageBucket: 'maas-first-app.appspot.com',
  messagingSenderId: '344471242957	',
  appId: '1:344471242957:android:04f5bb78e206e055600184',
//   measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

// Initialize Firebase Authentication and get a reference to the service
export const FIREBASE_AUTH = getAuth(app);
export const FIRESTORE_DB = getFirestore(app);
