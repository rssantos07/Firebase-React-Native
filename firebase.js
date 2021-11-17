import firebase from "firebase";
import 'firebase/firebase-firestore';


var firebaseConfig = {
    apiKey: "AIzaSyBdkrTu9Sl1MkOGj9Afr6jIqwDP0HKKw6Q",
    authDomain: "soulcode-7b6ea.firebaseapp.com",
    projectId: "soulcode-7b6ea",
    storageBucket: "soulcode-7b6ea.appspot.com",
    messagingSenderId: "1051292246200",
    appId: "1:1051292246200:web:27a681bed3758fc06e544d",
    measurementId: "G-MBE68Z6K97"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // porta de entrada para a base de dados do projeto
  const db = firebase.firestore();
  export default {
      db,firebase
  }