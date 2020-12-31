import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const config = {
    apiKey: "AIzaSyAKi8IG2y7-c-5SD-UvrvaGeQAl1HJiY-8",
    authDomain: "chitterchatter-a65ac.firebaseapp.com",
    databaseURL: "https://chitterchatter-a65ac-default-rtdb.firebaseio.com"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();