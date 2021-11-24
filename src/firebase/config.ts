import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

//Importa as bilbiotecas do firebase e inicia a função do firebase para todo o projeto, colocando os tokens e ids
// criados na minha conta pessoal do Google. Só é possivel ter acesso à elas com o mesmo email e logado com ele


if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyAQxg7K6Kmp3RNVYJ0WJBXdAQFLryJRWPs",
        authDomain: "myrocket-2021.firebaseapp.com",
        projectId: "myrocket-2021",
        databaseURL: "https://myrocket-2021-default-rtdb.firebaseio.com/",
    });
}

export default firebase;