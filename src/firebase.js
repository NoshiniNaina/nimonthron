import firebase from 'firebase/app'
//import * as firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyALZmMbxWVSBqYTzS7JBBNV0EHZOfV-JD0",
  authDomain: "ema-jhon-simple-b18eb.firebaseapp.com",
  projectId: "ema-jhon-simple-b18eb",
  storageBucket: "ema-jhon-simple-b18eb.appspot.com",
  messagingSenderId: "216835540978",
  appId: "1:216835540978:web:699676536087bfa2fc4d6b"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();

export { db, storage }