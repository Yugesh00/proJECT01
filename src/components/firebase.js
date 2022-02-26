import firebase from 'firebase';
  
const firebaseConfig = {
    apiKey: "AIzaSyARYom4T7rNc2FXCTQ_EFHVUD9bkAO2y4s",
    authDomain: "pslquiz-4d249.firebaseapp.com",
    projectId: "pslquiz-4d249",
    storageBucket: "pslquiz-4d249.appspot.com",
    messagingSenderId: "173405193588",
    appId: "1:173405193588:web:ee5e0e0e5c4ad14a845821",
    measurementId: "G-EGYDCCGBTN"
};
    
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
  
export default database;