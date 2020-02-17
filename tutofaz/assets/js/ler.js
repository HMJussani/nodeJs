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
        div.className = 'titulos';
        div.id = 'titulos';
        div.appendChild(document.createTextNode(snapshot.val().title));
        corpo.appendChild(div);

    });

    function lerBanco(title) {

        var corpo = document.body;
        var db = firebase.database();
        var objTitle = db.ref("Tutoriais").child(title);
        objTitle.on("child_added", function (snapshot) {
            var subtitulo = snapshot.val().subtitle;
            var roteiro = snapshot.val().roteiro;
            if((subtitulo.isNull)&&(roteiro.isNull)) return;
            var div = document.createElement('div');
            div.className = 'injetada';
            div.appendChild(document.createTextNode(subtitulo));
            div.appendChild(document.createTextNode(' : '));
            div.appendChild(document.createTextNode(roteiro));
            corpo.appendChild(div);
        });

    }

}


