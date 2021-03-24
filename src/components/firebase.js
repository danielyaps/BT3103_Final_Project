import firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyBt-QaZyQbowodRDfyajw_B2h5ETdRBjSo",
    authDomain: "bt3103finalproject.firebaseapp.com",
    projectId: "bt3103finalproject",
    storageBucket: "bt3103finalproject.appspot.com",
    messagingSenderId: "62503805863",
    appId: "1:62503805863:web:14de8cad7c846dea1fcc82",
    measurementId: "G-833MWN8XKC"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;