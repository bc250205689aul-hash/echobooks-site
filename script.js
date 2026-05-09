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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

// ================== LOGIN FUNCTIONS ==================

function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then((result) => {
      alert("✅ Logged in successfully with Google!");
      document.getElementById("user-info").innerHTML = `Welcome, ${result.user.displayName}`;
    })
    .catch((error) => alert("Error: " + error.message));
}

function appleLogin() {
  const provider = new firebase.auth.OAuthProvider('apple.com');
  auth.signInWithPopup(provider)
    .then(() => alert("✅ Logged in with Apple!"))
    .catch((error) => alert("Error: " + error.message));
}

function microsoftLogin() {
  const provider = new firebase.auth.OAuthProvider('microsoft.com');
  auth.signInWithPopup(provider)
    .then(() => alert("✅ Logged in with Microsoft!"))
    .catch((error) => alert("Error: " + error.message));
}

function twitterLogin() {
  const provider = new firebase.auth.TwitterAuthProvider();
  auth.signInWithPopup(provider)
    .then(() => alert("✅ Logged in with Twitter!"))
    .catch((error) => alert("Error: " + error.message));
}

// Optional: Show user info when already logged in
auth.onAuthStateChanged(user => {
  if (user) {
    document.getElementById("user-info").innerHTML = `Logged in as: ${user.email || user.displayName}`;
  }
});
