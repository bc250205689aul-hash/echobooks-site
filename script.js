// ================== YOUR FIREBASE CONFIG ==================
const firebaseConfig = {
  apiKey: "PASTE_YOUR_API_KEY_HERE",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "XXXXXXXX",
  appId: "XXXXXXXX"
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
