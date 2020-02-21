
if (firebase.initializeApp(firebaseConfig)) {

    firebase.database().ref(`Tutoriais`).on(`value`, function (snapshot) {
        var data = [];
        var readings = snapshot.val();
        if (readings) {
            var currentValue;
            for (var key in readings) {
                currentValue = readings[key]
                data.push(currentValue);
            }
            criarLinks(data);
        }

    });

    function lerBanco(title) {
        var existe = dbExiste(title)
        if (existe) {
            var data = [];
            firebase.database().ref(`Tutoriais`).child(title).on('value', function (snapshot) {
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
        if (false === existe) {
            alert(`${title} não existe no banco de dados.`);
        }

    }

    function apagaTuto(title) {
        var existe = dbExiste(title);
        if (existe) {
            var aRemover = firebase.database().ref(`Tutoriais/${title}/`);
            aRemover.remove(function (error) {
                alert(`${title} removido do banco de dados.`);
                window.location.reload();
            });
        }
        if (false === existe) {
            alert(`${title} não existe no banco de dados.`);
        }

    }

    function dbExiste(title) {
        var existe = false;
        firebase.database().ref(`Tutoriais`).child(title).on('value', function (snapshot) {
            existe = snapshot.exists();
        });
        return existe;
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
        div.appendChild(document.createTextNode(data[i].interacao));
        div.appendChild(document.createTextNode("-"));
        div.appendChild(document.createTextNode(data[i].subtitle));
        div.appendChild(document.createTextNode(":"));
        div.appendChild(document.createTextNode(data[i].roteiro));
        corpo.appendChild(div);
    }

}

function criarLinks(data) {
    for (var i = 0; i < data.length; i++) {
        var a = document.createElement('a');
        var div = document.createElement('div');
        a.className = 'titulos';
        div.className = 'link';
        a.id = data[i].title;
        a.setAttribute('href', `javascript:lerBanco("${data[i].title}")`);
        a.appendChild(document.createTextNode(data[i].title));
        div.appendChild(a);
        document.body.appendChild(div);
    }

}

