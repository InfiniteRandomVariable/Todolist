import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAGJHQYimX_j88cCIda_TndT87MTaGjIj8",
  authDomain: "todolist2019dec.firebaseapp.com",
  databaseURL: "https://todolist2019dec.firebaseio.com",
  projectId: "todolist2019dec",
  storageBucket: "todolist2019dec.appspot.com",
  messagingSenderId: "250416898714",
  appId: "1:250416898714:web:896214324b202d6a54f523"
});

export { firebaseConfig as firebase };
