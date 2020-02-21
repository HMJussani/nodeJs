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

function novoPasso() {
    getDados();
    injetarDiv(newTuto.interacao);
    criaDivs(newTuto.interacao);
    salvarBanco(newTuto.newTitle, newTuto.newSubtitle, newTuto.newRoteiro, newTuto.interacao);
    // lerBanco(newTuto.newTitle); 
    newTuto.interacao++;
}

function lerHtml() {
    lerBanco(document.querySelector("#salvoTitle").value);
}

function apagaHtml() {
    apagaTuto(document.querySelector("#salvoTitle").value);
}

function editaHtml() {    
    window.location.replace("update.html");
}
function updateHtml() {   
    getDadosUp();
    updateTuto(newTuto.newTitle, newTuto.newSubtitle,newTuto.newRoteiro, newTuto.interacao);
}

function getPasso(interacao) {
    if (interacao === 0) {
        return false;
    }
}

