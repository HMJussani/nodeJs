function limparDiv() {
    if (document.querySelector('.title') != null) {
        var qtde = document.querySelectorAll('.title');
        for (var i = 0; i < qtde.length; i++) {
            if (document.querySelector('.title') != null) document.getElementById(`title${i}`).innerHTML = "";
        }

    }

    if (document.querySelector('.injetada') != null) {
        var qtde = document.querySelectorAll('.injetada');
        for (var i = 0; i < qtde.length; i++) {
            if (document.querySelector('.injetada') != null) document.getElementById(`injetada${i}`).innerHTML = "";
        }

    }

}

function criarDivs(data) {

    for (var i = 0; i < data.length - 1; i++) {
        var corpo = document.body;
        var div = document.createElement('div');
        var p = document.createElement('p');
        var qtde = 0;
        if (document.querySelector('.title') != null) {
            qtde = document.querySelectorAll('.title').length;
        }

        if (i === 0) {
            var divTitle = document.createElement('div');
            divTitle.className = 'title';
            divTitle.id = `title${qtde}`;
            divTitle.appendChild(document.createTextNode(data[i].title));
            corpo.appendChild(divTitle);
        }

        div.className = 'injetada';
        div.id = `injetada${conta}`;
        p.appendChild(document.createTextNode(data[i].subtitle));
        div.appendChild(p);
        corpo.appendChild(div);
        div.appendChild(document.createTextNode(data[i].roteiro));
        corpo.appendChild(div);
        conta++;
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

function acertaArray(array) {
    var arrayCerto = [];
    for (var i = 0; i < array.length; i++) {
        arrayCerto[i + 1] = array[i];
    }
    return arrayCerto;

}



