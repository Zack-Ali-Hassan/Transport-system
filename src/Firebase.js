import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBiti5dhqnmFj6kEP86UfWW9TaQtsFEV-o",
  authDomain: "login-register-app-6ccc8.firebaseapp.com",
  projectId: "login-register-app-6ccc8",
  storageBucket: "login-register-app-6ccc8.appspot.com",
  messagingSenderId: "1057737576317",
  appId: "1:1057737576317:web:54772c4adde954fa1f0614"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);