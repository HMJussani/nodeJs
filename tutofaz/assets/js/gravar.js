if (firebase.initializeApp(firebaseConfig)) {

    firebase.database().ref(`Tutoriais`).on(`value`, function (snapshot) {
        var readings = snapshot.val();

    });


    function salvarBanco(title, subtitle, roteiro, interacao) {
        var existe = dbExiste(title);
        if (!existe) {
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

}
