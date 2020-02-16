
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

    firebase.database().ref("Tutoriais").on("child_added", function (snapshot) {
        var corpo = document.body;
        var div = document.createElement('div');
        div.className = 'injetada';
        div.appendChild(document.createTextNode(snapshot.val().title));
        corpo.appendChild(div);
    });

    function salvarBanco(title, subtitle, roteiro, interacao) {

        firebase.database().ref("Tutoriais/" + title + "/" + interacao).set({
            interacao,
            subtitle,
            roteiro
        });
        firebase.database().ref("Tutoriais/" + title + "/").update({
            title
        });
    }

    function lerBanco(title) {

        var corpo = document.body;
        var db = firebase.database();
        var objTitle = db.ref("Tutoriais").child(title);
        objTitle.on("child_added", function (snapshot) {
            var div = document.createElement('div');
            div.className = 'injetada';
            div.appendChild(document.createTextNode(snapshot.val().subtitle));
            div.appendChild(document.createTextNode(' : '));
            div.appendChild(document.createTextNode(snapshot.val().roteiro));
            corpo.appendChild(div);

        });

    }
}