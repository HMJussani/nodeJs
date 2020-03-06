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

var newTuto = {
    newTitle: "",
    newSubtitle: "",
    newRoteiro: "",
    interacao: 1,
};

function getDados() {
    newTuto.newTitle = document.querySelector("#title").value;
    newTuto.newSubtitle = document.querySelector("#subtitle").value;
    newTuto.newRoteiro = document.querySelector("#roteiro").value;

}
function getDadosUp() {
    newTuto.newTitle = document.querySelector("#title").value;
    newTuto.newSubtitle = document.querySelector("#subtitle").value;
    newTuto.newRoteiro = document.querySelector("#roteiro").value;
    newTuto.interacao = document.querySelector("#interacao").value;

}

function message(message) {
    document.getElementById("title").style.background = 'Yellow';
    alert(message);
    return;
}

function salvaHtml() {
    var title = document.getElementById("title").value;
    if (dbExiste(title)) {
        getDados();
        var fim = getData(document.querySelector("#title").value);
        salvarBanco(newTuto.newTitle, newTuto.newSubtitle, newTuto.newRoteiro, fim.length);
        limparDiv();
        criarDivs(getData(title));
        document.querySelector("#subtitle").value = "";
        document.querySelector("#roteiro").value = "";
        return;
    }
    getDados();
    if (title.length === 0) {
        message("Erro: Campo obrigatório vazio.");
        return;
    }
    salvarBanco(newTuto.newTitle, newTuto.newSubtitle, newTuto.newRoteiro, newTuto.interacao);
    limparDiv();
    criarDivs(getData(title));
    document.querySelector("#subtitle").value = "";
    document.querySelector("#roteiro").value = "";
}

function novoHtml() {
    var title = document.getElementById("title").value;
    if (title.length === 0) {
        message("Erro: Campo obrigatório vazio.");
        return;
    }
    document.getElementById("title").style.background = 'white';

    if (dbExiste(title)) {
        window.location.replace(`update.html?=${title}`);
        return;
    }
    window.location.replace(`novo.html?=${title}`);
}

function apagaHtml() {
    var title = document.getElementById("title").value;
    if (title.length === 0) {
        message("Erro: Campo obrigatório vazio.");
        return;
    }
    document.getElementById("title").style.background = 'white';
    if (dbExiste(title) === false) {
        alert(`${title} não existe no banco de dados.`);
        return;
    }
    if (confirm(`${title} será apagado...`)) {
        apagaTuto(title);
    }
}

function leHtml() {
    var title = document.querySelector('#title').value;
    if (dbExiste(title) === false) {
        alert(`${title} não existe no banco de dados.`);
        return;
    }
    window.location.replace(`viewer.html?=${title}`);
}

function editaHtml() {
    var title = document.getElementById("title").value;
    if (title.length === 0) {
        message("Erro: Campo obrigatório vazio.");
        return;
    }
    document.getElementById("title").style.background = 'white';
    if (dbExiste(title)) {
        window.location.replace(`update.html?=${title}`);
        return;
    }
    window.location.replace(`novo.html?=${title}`);
}

function salvaEtapa() {
    getDadosUp();
    if (updateTuto(newTuto.newTitle, newTuto.newSubtitle, newTuto.newRoteiro, newTuto.interacao)) {
        alert(`Etapa ${newTuto.newSubtitle} salvo com sucesso!`);
        document.querySelector("#subtitle").value = "";
        document.querySelector("#roteiro").value = "";
        document.querySelector("#fim").value = newTuto.interacao;
    }
}

function incluiEtapa() {
    var fim = getData(document.querySelector("#title").value);
    var ultima = fim.length - 1;
    document.querySelector("#subtitle").value = "";
    document.querySelector("#roteiro").value = "";
    document.querySelector("#fim").value = ultima;
    document.querySelector("#interacao").value = fim.length;
}

function removeHtml() {
    getDadosUp();
    removeEtapa(newTuto.newSubtitle, newTuto.newRoteiro, newTuto.interacao);
}

function getPasso(interacao) {
    if (interacao === 0) {
        return false;
    }
}

