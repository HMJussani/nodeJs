if (firebase.initializeApp(firebaseConfig)) {

    firebase.database().ref(`Tutoriais`).on(`value`, function (snapshot) {
        var readings = snapshot.val();
        var url = window.location.href.split('=');
        document.querySelector(`#title`).value = decodeURI(url[1]);

    });

    function salvarBanco(title, subtitle, roteiro, interacao) {            
        firebase.database().ref(`Tutoriais/${title}/${interacao}`).set({
                title,
                interacao,
                subtitle,
                roteiro
            });
            firebase.database().ref(`Tutoriais/${title}/`).update({
                title
            });
            alert(`${title} salvo com sucesso!`);                     
        }  
}
