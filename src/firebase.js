import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD6oZv0F_sd9EaTfbwd6BKy-6FsMK-RpYc",
    authDomain: "perfume-website-5b891.firebaseapp.com",
    databaseURL: "https://perfume-website-5b891-default-rtdb.firebaseio.com",
    projectId: "perfume-website-5b891",
    storageBucket: "perfume-website-5b891.appspot.com",
    messagingSenderId: "593469834190",
    appId: "1:593469834190:web:f0317fa143def32fbc219f",
    measurementId: "G-NJCXM2XH7G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
