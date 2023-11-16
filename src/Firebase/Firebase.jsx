// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0q-k-y9lpvLDaVIv2AKL1clS-ufWtZUM",
  authDomain: "the-travel-expert.firebaseapp.com",
  projectId: "the-travel-expert",
  storageBucket: "the-travel-expert.appspot.com",
  messagingSenderId: "902436512011",
  appId: "1:902436512011:web:6d2eb39c96ca9ea8e7c20e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;