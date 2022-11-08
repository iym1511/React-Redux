// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCUIedA7u8cw_toR13v0svPqBtdluxXFvk",
    authDomain: "fir-login-6362b.firebaseapp.com",
    projectId: "fir-login-6362b",
    storageBucket: "fir-login-6362b.appspot.com",
    messagingSenderId: "940266348977",
    appId: "1:940266348977:web:f2b31b4ed6509190009d90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


// 따로 가져와서 사용하자