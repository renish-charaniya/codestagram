import firebase from 'firebase';
require('dotenv').config();

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "codestagram-b027c.firebaseapp.com",
    databaseURL: "https://codestagram-b027c.firebaseio.com",
    projectId: "codestagram-b027c",
    storageBucket: "codestagram-b027c.appspot.com",
    messagingSenderId: "615032423044",
    appId: "1:615032423044:web:7cb034332583eaa585b8d1"
};

firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();
const auth=firebase.auth();
const storage=firebase.storage();

export {db,auth,storage};