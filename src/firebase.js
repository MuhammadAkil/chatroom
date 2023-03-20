import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const FirebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBzmgZxffrclUSij_jde-5EkVmrpVlAQLo",
  authDomain: "chitchat-5dbdf.firebaseapp.com",
  projectId: "chitchat-5dbdf",
  storageBucket: "chitchat-5dbdf.appspot.com",
  messagingSenderId: "849900647372",
  appId: "1:849900647372:web:382a51aa0b449067f26369",
});

const db = firebase.firestore(FirebaseApp);
const auth = firebase.auth();
export { auth, db };
