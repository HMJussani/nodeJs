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

    function updateTuto(title, subtitle, roteiro, interacao) {
        var title = document.getElementById("title").value;
        var sucesso = false;
        if (title.length == 0) {
            document.getElementById("title").style.background = 'Yellow';
            alert("Oque vc gostaria de editar?");
            return;
        }
        sucesso = firebase.database().ref(`Tutoriais/${title}/${interacao}`).set({
            title,
            interacao,
            subtitle,
            roteiro
        });
        return sucesso;
    }

    function lerBanco(title) {
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
        setDadosUp(data);
        $('#interacao').bind('click keyup', function () {
            getSubTitle($('#interacao').val(), data);
        });
    }

    function removeEtapa(subtitle, roteiro, interacao) {
        var aRemover = firebase.database().ref(`Tutoriais/${title}/`);
        aRemover.remove(function (error) {
            alert(`${title} removido do banco de dados.`);
            window.location.reload();
        });
    }

}

function setDadosUp(data) {
    document.querySelector("#title").value = data[0].title;
    document.querySelector("#interacao").value = 1;
    document.querySelector("#subtitle").value = data[0].subtitle;
    document.querySelector("#roteiro").value = data[0].roteiro;

}

function getSubTitle(indice, data) {
    document.querySelector("#subtitle").value = data[indice - 1].subtitle;
    document.querySelector("#roteiro").value = data[indice - 1].roteiro;

}
