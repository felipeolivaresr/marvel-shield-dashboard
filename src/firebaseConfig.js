// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCs5G5EL6WypLZD9kXKM6y8ppV7xZlVzlA",
  authDomain: "fir-2-5fbbf.firebaseapp.com",
  projectId: "fir-2-5fbbf",
  storageBucket: "fir-2-5fbbf.firebasestorage.app",
  messagingSenderId: "192623161678",
  appId: "1:192623161678:web:20cd74da9f6d20d52e6e1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export { auth }

export default app