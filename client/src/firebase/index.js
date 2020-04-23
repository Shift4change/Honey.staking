import firebase from 'firebase';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyAsHvA11E0n8kSJZahD9AR6R_1AVPEh4Lg",
    authDomain: "solve-staking.firebaseapp.com",
    databaseURL: "https://solve-staking.firebaseio.com",
    projectId: "solve-staking",
    storageBucket: "solve-staking.appspot.com",
    messagingSenderId: "275505061295",
    appId: "1:275505061295:web:9cc38c9348d5bce9b0235a",
    measurementId: "G-3CJCCN575X"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const storage= firebase.storage();
  export  {
      storage, firebase as default
  }