import firebase from "firebase";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCuqsqYezbIR3yw46bgVvBtAxJ708k9vTE",
  authDomain: "alpha-178509.firebaseapp.com",
  databaseURL: "https://alpha-178509.firebaseio.com",
  projectId: "alpha-178509",
  storageBucket: "",
  messagingSenderId: "1034032747860"
};

firebase.initializeApp(config);
const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

const database = firebase.database();
export {
  auth,
  database,
  googleAuthProvider,
  githubAuthProvider,
  facebookAuthProvider,
  twitterAuthProvider
};
