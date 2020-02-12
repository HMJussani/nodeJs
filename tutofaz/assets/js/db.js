/*
Conexão com banco de dados Firebase
*/
const firebaseConfig = {
    apiKey: "AIzaSyDSu9mQ77ASPWZg-s0j45mRyiUVjK357J4",
    authDomain: "estudo-d5862.firebaseapp.com",
    databaseURL: "https://estudo-d5862.firebaseio.com",
    projectId: "estudo-d5862",
    storageBucket: "estudo-d5862.appspot.com",
    messagingSenderId: "4938509167",
    appId: "1:4938509167:web:3f9780708426e41f07d69a",
    measurementId: "G-GKSWD7NJ7T"
};

let dbOK = "down";
if (firebase.initializeApp(firebaseConfig)) {
    dbOK = "up";
}

console.log("fire base " + dbOK);

function salvarBanco(title, subtitle, roteiro, interacao) {
    if (dbOK === "down") {
        return;
    }
    var db = firebase.database();
    firebase.database().ref(title + "/" + interacao).set({
        //title,
        subtitle,
        roteiro
    });
}
