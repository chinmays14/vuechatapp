import firebase from 'firebase'
//App's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyByV2vomqOyi2_GMh83O0xMMCsYUdtVZD8",
    authDomain: "chatapp-vuejs.firebaseapp.com",
    databaseURL: "https://chatapp-vuejs.firebaseio.com",
    projectId: "chatapp-vuejs",
    storageBucket: "chatapp-vuejs.appspot.com",
    messagingSenderId: "640062925407",
    appId: "1:640062925407:web:0117fc12f78fbfa272c9ea"
  };
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore();

export default firebaseApp.firestore();