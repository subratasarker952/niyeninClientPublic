import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_ENV_apiKey,
    authDomain: import.meta.env.VITE_ENV_authDomain,
    projectId: import.meta.env.VITE_ENV_projectId,
    storageBucket: import.meta.env.VITE_ENV_storageBucket,
    messagingSenderId: import.meta.env.VITE_ENV_messagingSenderId,
    appId: import.meta.env.VITE_ENV_appId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth