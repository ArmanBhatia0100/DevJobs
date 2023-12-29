// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, updateDoc, getDoc, doc, arrayUnion, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcPvVAGec-fHqk5-bpdgeZgUBnkreC8T4",
  authDomain: "testab-ac171.firebaseapp.com",
  projectId: "testab-ac171",
  storageBucket: "testab-ac171.appspot.com",
  messagingSenderId: "799374352602",
  appId: "1:799374352602:web:9f8fbcf02cd842575e85e3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ---------FireStore
export const db = getFirestore(app);

async function addUser(userData) {
  const userRef = doc(db, "jboard", "users");
  const getSnap = await getDoc(userRef);

  if (getSnap.exists) {
    try {
      await updateDoc(userRef, {
        data: arrayUnion(userData),
      });
      console.log("Data updated");
    } catch (e) {
      console.log("There is an error", e);
    }
  } else {
    setDoc(userRef, { data: userData });
    console.log("Data Created and added");
  }
}
export { addUser };

// --------Firebase Authentication
