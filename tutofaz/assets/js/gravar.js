if (firebase.initializeApp(firebaseConfig)) {

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

    }
   
    function dbExiste(title) {
        var existe;
        firebase.database().ref(`Tutoriais`).child(title).on('value', function (snapshot) {
            existe = snapshot.exists();
        });
        return existe;
    }

}
