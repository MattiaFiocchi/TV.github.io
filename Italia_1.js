    document.addEventListener('DOMContentLoaded', function() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                parseXml(this);
            }
        };
        xmlhttp.open("GET", "programmi.xml", true);
        xmlhttp.send();
    });

    function parseXml(xml) {
        var xmlDoc = xml.responseXML;
        var programs = xmlDoc.querySelectorAll('Canale[IDCanale="c4"] programma');

        var filmsContainer = document.getElementById('films');

        var nomeCanale = programs[0].parentElement.querySelector('NomeCanale').textContent;
        var channelTitle = document.createElement('h1');
        channelTitle.textContent = nomeCanale;
        filmsContainer.appendChild(channelTitle);

        programs.forEach(function(program) {
            var nomeFilm = program.querySelector('NomeFilm').textContent;
            var oraInizio = program.querySelector('Ora_Inizio').textContent;
            var oraFine = program.querySelector('Ora_Fine').textContent;
            var durata = program.querySelector('Durata').textContent;
            var categoria = program.querySelector('Categoria').textContent;

            var programDiv = document.createElement('div');
            programDiv.classList.add('program');

            programDiv.innerHTML = '<h3>' + nomeFilm + '</h3>' + 
                                '<p>Ora Inizio: ' + oraInizio + '</p>' +
                                '<p>Ora Fine: ' + oraFine + '</p>' +
                                '<p>Durata: ' + durata + '</p>' +
                                '<p>Categoria: ' + categoria + '</p>';

            filmsContainer.appendChild(programDiv);
        });
    }
