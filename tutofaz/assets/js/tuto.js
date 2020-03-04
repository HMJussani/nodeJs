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

function criaDivs(interacao) {
    var novaDiv = "";
    var htmlDiv = "novaDiv" + interacao;
    if (interacao === 0) novaDiv = `${novaDiv} <h2> ${newTuto.newTitle}</h2>`;
    novaDiv = `${novaDiv} <p> ${newTuto.newSubtitle} </p>`;
    novaDiv = `${novaDiv} <p> ${newTuto.newRoteiro} </p>`;
    document.getElementById(htmlDiv).innerHTML = novaDiv;

}

function injetarDiv(interacao) {
    var corpo = document.body;
    var div = document.createElement("div");
    div.className = "injetada";
    div.id = "novaDiv" + interacao;
    corpo.appendChild(div);

}

function message(message) {
    document.getElementById("title").style.background = 'Yellow';
    alert(message);
    return;
}

function lerHtml() {
    lerBanco(document.querySelector("#title").value);
}

function salvaHtml() {
    var title = document.getElementById("title").value;
    if (dbExiste(title)) {
        getDados();
        salvarBanco(newTuto.newTitle, newTuto.newSubtitle, newTuto.newRoteiro, newLerBanco(title)[0].interacao + 1);
        return;
    }
    getDados();
    if (title.length ?
        salvarBanco(newTuto.newTitle, newTuto.newSubtitle, newTuto.newRoteiro, newTuto.interacao + 1)
        : message("Oque vc gostaria de salvar?"));

}

function novoHtml() {
    var title = document.getElementById("title").value;
    if (title.length == 0) {
        document.getElementById("title").style.background = 'Yellow';
        alert("Campo obrigatório");
        return;
    }
    document.getElementById("title").style.background = 'white';
   
    if (dbExiste(title)) {
        window.location.replace("update.html");
        return;
    }
    window.location.replace("novo.html");
}

function apagaHtml() {
    var title = document.getElementById("title").value;
    if (title.length == 0) {
        document.getElementById("title").style.background = 'Yellow';
        alert("Oque vc gostaria de excluir?");
        return;
    }
    document.getElementById("title").style.background = 'white';
    if (confirm(`${title} será apagado...`)) {
        apagaTuto(title);
    }

}

function editaHtml() {
    var title = document.getElementById("title").value;
    if (title.length == 0) {
        document.getElementById("title").style.background = 'Yellow';
        alert("Campo obrigatório");
        return;
    }
    document.getElementById("title").style.background = 'white';
    if (dbExiste(title)) {
        window.location.replace("update.html");
        return;
    }
    window.location.replace("novo.html");
}

function updateHtml() {
    getDadosUp();
    if (updateTuto(newTuto.newTitle, newTuto.newSubtitle, newTuto.newRoteiro, newTuto.interacao)) {
        alert(`Etapa ${newTuto.newSubtitle} salvo com sucesso!`);
        document.querySelector("#subtitle").value = "";
        document.querySelector("#roteiro").value = "";
        document.querySelector("#fim").value = newTuto.interacao;

    }

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

