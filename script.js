// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEytklQ_refpkStisgVb6Bv7wZrHW7bMg",
  authDomain: "echobooks-dc31b.firebaseapp.com",
  projectId: "echobooks-dc31b",
  storageBucket: "echobooks-dc31b.firebasestorage.app",
  messagingSenderId: "565405056470",
  appId: "1:565405056470:web:ab11970ea2c16452db3877",
  measurementId: "G-4X7V7088ZB"
};
// ===========================================================

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then(() => {
      document.getElementById("status").innerHTML = "✅ Successfully Logged In!";
    })
    .catch(error => {
      document.getElementById("status").innerHTML = "Error: " + error.message;
    });
}

function appleLogin() {
  const provider = new firebase.auth.OAuthProvider('apple.com');
  auth.signInWithPopup(provider)
    .then(() => document.getElementById("status").innerHTML = "✅ Apple Login Successful")
    .catch(error => document.getElementById("status").innerHTML = error.message);
}

function microsoftLogin() {
  const provider = new firebase.auth.OAuthProvider('microsoft.com');
  auth.signInWithPopup(provider)
    .then(() => document.getElementById("status").innerHTML = "✅ Microsoft Login Successful")
    .catch(error => document.getElementById("status").innerHTML = error.message);
}

function twitterLogin() {
  const provider = new firebase.auth.TwitterAuthProvider();
  auth.signInWithPopup(provider)
    .then(() => document.getElementById("status").innerHTML = "✅ Twitter Login Successful")
    .catch(error => document.getElementById("status").innerHTML = error.message);
}
