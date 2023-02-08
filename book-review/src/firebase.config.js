import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP3KCwiekGNylum5bxRxKYINUHkeC3_Fg",
  authDomain: "book-review-app-d1fd5.firebaseapp.com",
  projectId: "book-review-app-d1fd5",
  storageBucket: "book-review-app-d1fd5.appspot.com",
  messagingSenderId: "622744921515",
  appId: "1:622744921515:web:bfe8510b6db75972a39eee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
