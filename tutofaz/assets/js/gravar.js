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

if (firebase.initializeApp(firebaseConfig)) {

    function salvarBanco(title, subtitle, roteiro, interacao) {

        firebase.database().ref(`Tutoriais/ ${title} /  ${interacao}`).set({
            interacao,
            subtitle,
            roteiro
        });
        firebase.database().ref(`Tutoriais/ ${title}/`).update({
            title
        });
    }

}


