
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

    function apagaTuto(title) {
        var aRemover = firebase.database().ref(`Tutoriais/${title}/`);
        aRemover.remove(function (error) {
            alert("Removido");
            window.location.reload();
        });
    }

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