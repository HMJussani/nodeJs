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
        firebase.database().ref(`Tutoriais/${title}/${interacao}`).set({
            interacao,
            subtitle,
            roteiro
        });
        window.location.reload();
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
        criarDivs(data);
        setDadosUp(data);
        $('#interacao').bind('click keyup', function () {
            getSubTitle($('#interacao').val(), data);
        });
    }

    function removeEtapa(subtitle,roteiro, interacao){
        var aRemover = firebase.database().ref(`Tutoriais/${title}/`);
    aRemover.remove(function (error) {
        alert(`${title} removido do banco de dados.`);
        window.location.reload();
    });
    }

}

function criarLinks(data) {
    for (var i = 0; i < data.length; i++) {
        var a = document.createElement('a');
        var div = document.createElement('div');
        a.className = 'titulos';
        div.className = 'row';
        a.id = data[i].title;
        a.setAttribute('href', `javascript:lerBanco("${data[i].title}")`);
        a.appendChild(document.createTextNode(data[i].title));
        div.appendChild(a);
        document.body.appendChild(div);
    }

}

function setDadosUp(data) {
    document.querySelector("#title").value = data[1].title;
    document.querySelector("#interacao").value = 1;
    document.querySelector("#subtitle").value = data[0].subtitle;
    document.querySelector("#roteiro").value = data[0].roteiro;
}

function getSubTitle(indice, data) {      
    document.querySelector("#subtitle").value = data[indice-1].subtitle;
    document.querySelector("#roteiro").value = data[indice-1].roteiro;
}


function criarDivs(data) {
    for (var i = 0; i < data.length - 1; i++) {
        var corpo = document.body;
        var div = document.createElement('div');
        var p = document.createElement('p');
        if (i === 0) {
            var divTitle = document.createElement('div');
            divTitle.className = 'title';
            divTitle.id = 'title';
            divTitle.appendChild(document.createTextNode(data[i].title));
            corpo.appendChild(divTitle);
        }
        div.className = 'injetada';
        div.id = 'injetada';
        p.appendChild(document.createTextNode(data[i].subtitle));
        div.appendChild(p);
        corpo.appendChild(div);
        div.appendChild(document.createTextNode(data[i].roteiro));
        corpo.appendChild(div);
        
    }

}