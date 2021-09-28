import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";


if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyAQxg7K6Kmp3RNVYJ0WJBXdAQFLryJRWPs",
        authDomain: "myrocket-2021.firebaseapp.com",
        projectId: "myrocket-2021",
        databaseURL: "https://myrocket-2021-default-rtdb.firebaseio.com/",
    });
}

export default firebase;