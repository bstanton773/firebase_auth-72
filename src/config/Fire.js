import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAQRYQgg-42tpejH5M00-G7boC5h5fORgE",
    authDomain: "auth-example-72.firebaseapp.com",
    projectId: "auth-example-72",
    storageBucket: "auth-example-72.appspot.com",
    messagingSenderId: "783396084069",
    appId: "1:783396084069:web:b7c5eab0a35c961639698c"
};


const fire = initializeApp(firebaseConfig);
export default fire;
