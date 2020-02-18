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

    firebase.database().ref(`Tutoriais`).on(`child_added`, function (snapshot) {
        var titulo = snapshot.val().title;
        if (titulo.isNull) return;
        var corpo = document.body;
        var div = document.createElement('div');
        div.className = 'titulos';
        div.id = 'titulos';
        div.appendChild(document.createTextNode(titulo));
        corpo.appendChild(div);

    });

    function lerBanco(title) {
        var data = [];
        var objTitle = firebase.database().ref(`Tutoriais`).child(title);
        objTitle.on('value', function (snapshot) {
            var readings = snapshot.val();
            if (readings) {
                var currentValue;
                for (var key in readings) {
                    currentValue = readings[key]
                    data.push(currentValue);
                }
            }
        });
        criarDivs(data);
    }

    function criarDivs(data) {
        for (var i = 0; i < data.length - 1; i++) {
            var corpo = document.body;
            var div = document.createElement('div');
            if (i === 0) {
                var divTitle = document.createElement('div');
                divTitle.className = 'title';
                divTitle.id = 'title';
                divTitle.appendChild(document.createTextNode(data[i].title));
                corpo.appendChild(divTitle);
            }
            div.className = 'injetada';
            div.id = 'injetada';
            div.appendChild(document.createTextNode(data[i].subtitle));
            div.appendChild(document.createTextNode(":"));
            div.appendChild(document.createTextNode(data[i].roteiro));
            corpo.appendChild(div);

        }
    }

}
