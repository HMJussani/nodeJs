var newTuto = {
    newTitle: "",
    newSubtitle: "",
    newRoteiro: "",
    interacao: 0,
};
function getDados() {
    newTuto.newTitle = document.getElementById("title").value;
    newTuto.newSubtitle = document.getElementById("subtitle").value;
    newTuto.newRoteiro = document.getElementById("roteiro").value;
    injetarDiv(newTuto.interacao);
    criaDivs(newTuto.interacao);
    newTuto.interacao++;
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
    div.id = "novaDiv" + interacao;
    corpo.appendChild(div);

}

