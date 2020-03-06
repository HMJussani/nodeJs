var conta = 0;

if (firebase.initializeApp(firebaseConfig)) {

    firebase.database().ref(`Tutoriais`).on(`value`, function (snapshot) {
        var data = [];
        var readings = snapshot.val();
        if (readings) {
            var currentValue;
            for (var key in readings) {
                currentValue = readings[key];
                data.push(currentValue);
            }
            criarLinks(data);
        }
    });

    function lerBanco(title) {       
        limparDiv();
        criarDivs(getData(title));
        document.querySelector("#title").value = title;
    }

    function apagaTuto(title) {       
            var aRemover = firebase.database().ref(`Tutoriais/${title}/`);
            aRemover.remove(function (error) {
                alert(`${title} removido do banco de dados.`);
                window.location.reload();
            });
        
    }
}


