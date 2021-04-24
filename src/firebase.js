import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAN7yNOL8LjWMVC4M9XJ4uD6JmWMqOO4Bg",
    authDomain: "snapchat-clone-byshagun.firebaseapp.com",
    projectId: "snapchat-clone-byshagun",
    storageBucket: "snapchat-clone-byshagun.appspot.com",
    messagingSenderId: "249739207647",
    appId: "1:249739207647:web:c2dec39eb2a9580894da6a",
    measurementId: "G-NMZR8XX2ZH"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider= new firebase.auth.GoogleAuthProvider();

export {db,auth,storage,provider};