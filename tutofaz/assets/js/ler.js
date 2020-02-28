var conta = 0;

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
            limparDiv();
            criarDivs(data);
            document.querySelector("#salvoTitle").value = data[0].title;
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
            window.location.reload();
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


