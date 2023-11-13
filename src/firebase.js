// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-9U4r3vUHEHMnkVZzAr-9StzWIybZXhw",
  authDomain: "explore-htl.firebaseapp.com",
  projectId: "explore-htl",
  storageBucket: "explore-htl.appspot.com",
  messagingSenderId: "449554788361",
  appId: "1:449554788361:web:f395907a39935c4326c8d8",
  measurementId: "G-3NBKS2PJ2Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const usersCollection = collection(db, "Users");

getDocs(usersCollection)
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // Access data for each document
      console.log(doc.id, " => ", doc.data());
    });
  })
  .catch((error) => {
    console.error("Error getting documents: ", error);
  });
export default firebaseConfig;
