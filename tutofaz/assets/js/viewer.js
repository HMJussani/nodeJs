
if (firebase.initializeApp(firebaseConfig)) {

    firebase.database().ref(`Tutoriais`).on(`value`, function (snapshot) {
        var url = window.location.href.split('=');
        var titulo = decodeURI(url[1]);
        var div = document.createElement('div');
        var href = document.createElement('a');
        var nav = document.createElement('nav');
        href.className = 'brand-logo center';
        div.className = 'nav-wrapper';
        href.setAttribute('href', `index.html`);
        href.appendChild(document.createTextNode(titulo));
        div.appendChild(href);
        nav.appendChild(div);
        document.body.appendChild(nav);
        criarDivs(getData(titulo));

    });

}

