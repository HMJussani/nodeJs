if (firebase.initializeApp(firebaseConfig)) {
   
    firebase.database().ref(`Tutoriais`).on(`value`, function (snapshot) {       
        var readings = snapshot.val();
        carregaHtml();
    });

    function updateTuto(title, subtitle, roteiro, interacao) {
        var title = document.getElementById("title").value;
        var sucesso = false;
        if (title.length == 0) {
            document.getElementById("title").style.background = 'Yellow';
            alert("Erro: campo obrigatório vazio.");
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
        document.querySelector("#fim").value = data.length - 1;
    }

    function removeEtapa(title, interacao) {
        var aRemover = firebase.database().ref(`Tutoriais/${title}/${interacao}`);
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


