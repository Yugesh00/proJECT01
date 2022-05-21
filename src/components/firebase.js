import firebase from 'firebase';
  
// const firebaseConfig = {
//     apiKey: "AIzaSyARYom4T7rNc2FXCTQ_EFHVUD9bkAO2y4s",
//     authDomain: "pslquiz-4d249.firebaseapp.com",
//     projectId: "pslquiz-4d249",
//     storageBucket: "pslquiz-4d249.appspot.com",
//     messagingSenderId: "173405193588",
//     appId: "1:173405193588:web:ee5e0e0e5c4ad14a845821",
//     measurementId: "G-EGYDCCGBTN"
// };

const firebaseConfig = {
    apiKey: "AIzaSyCFE-YohT5nRdrcoMy_Ryu1PJFgPjSUpVk",
    authDomain: "sattabjar-9aa02.firebaseapp.com",
    projectId: "sattabjar-9aa02",
    storageBucket: "sattabjar-9aa02.appspot.com",
    messagingSenderId: "1067577335749",
    appId: "1:1067577335749:web:b10948834871e9b6bdf5ac",
    measurementId: "G-ZV8Z236FWZ"
  };
  // apiKey: "AIzaSyA38EKjnfWeAQy3D_-aN715t-u094mKZk4",
  // authDomain: "newproject-cdd1b.firebaseapp.com",
  // projectId: "newproject-cdd1b",
  // storageBucket: "newproject-cdd1b.appspot.com",
  // messagingSenderId: "545067056264",
  // appId: "1:545067056264:web:0e7248e5275894a5c3733d",
  // measurementId: "G-8QJ71WR5EZ"
 
firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
// var db = firebase.firestore();

export default database;