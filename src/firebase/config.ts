import firebase from "firebase/app";

import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "photo-gallery-8b02a.firebaseapp.com",
  databaseURL: "https://photo-gallery-8b02a.firebaseio.com",
  projectId: "photo-gallery-8b02a",
  storageBucket: "photo-gallery-8b02a.appspot.com",
  messagingSenderId: "832772607285",
  appId: "1:832772607285:web:6fad53957d080856ead07c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

// adding time stamp when creating / uploading image (useStorage)
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
