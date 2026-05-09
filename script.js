const firebaseConfig = { ... your config ... };
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

// Google Login (Already easy)
function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then(() => alert("Logged in with Google!"))
    .catch(error => alert(error.message));
}

// Twitter Login
function twitterLogin() {
  const provider = new firebase.auth.TwitterAuthProvider();
  auth.signInWithPopup(provider)
    .then(() => alert("Logged in with Twitter!"))
    .catch(error => alert(error.message));
}
