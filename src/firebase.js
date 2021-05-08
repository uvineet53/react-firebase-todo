import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCWSD-gDAGbgMt-6ymdXVKrfVcdFe1qBZQ",
  authDomain: "react-todo-19247.firebaseapp.com",
  projectId: "react-todo-19247",
  storageBucket: "react-todo-19247.appspot.com",
  messagingSenderId: "628339363445",
  appId: "1:628339363445:web:a5991230da5671ef5e723c",
});

const db = firebaseApp.firestore();

export default db;
