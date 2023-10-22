document.addEventListener('DOMContentLoaded', function() {
    // Recupera il contenuto XML
    fetch('programmi.xml')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, 'application/xml');

            const canali = xmlDoc.querySelectorAll('Canale');

            const canaliDiv = document.querySelector('.canali');

            canali.forEach(canale => {
                const nomeCanale = canale.querySelector('NomeCanale').textContent;
                const programmi = canale.querySelectorAll('programma');

                const canaleDiv = document.createElement('div');
                canaleDiv.classList.add('canale');

                const titoloCanale = document.createElement('h2');
                titoloCanale.textContent = nomeCanale;

                // Aggiungi il collegamento solo se il nome del canale è "Rai 1"
                if (nomeCanale === "Rai 1") {
                    titoloCanale.addEventListener('click', function() {
                        window.location.href = 'Rai_1.html'; // Sostituisci 'nuova_pagina.html' con il percorso della tua nuova pagina
                    });
                    titoloCanale.style.cursor = 'pointer'; // Cambia il cursore quando passi sopra il testo
                }
                if (nomeCanale === "Rai 2") {
                    titoloCanale.addEventListener('click', function() {
                        window.location.href = 'Rai_2.html'; // Sostituisci 'nuova_pagina.html' con il percorso della tua nuova pagina
                    });
                    titoloCanale.style.cursor = 'pointer'; // Cambia il cursore quando passi sopra il testo
                }
                if (nomeCanale === "Top Crime") {
                    titoloCanale.addEventListener('click', function() {
                        window.location.href = 'TopCrime.html'; // Sostituisci 'nuova_pagina.html' con il percorso della tua nuova pagina
                    });
                    titoloCanale.style.cursor = 'pointer'; // Cambia il cursore quando passi sopra il testo
                }
                if (nomeCanale === "Italia 1") {
                    titoloCanale.addEventListener('click', function() {
                        window.location.href = 'Italia_1.html'; // Sostituisci 'nuova_pagina.html' con il percorso della tua nuova pagina
                    });
                    titoloCanale.style.cursor = 'pointer'; // Cambia il cursore quando passi sopra il testo
                }

                canaleDiv.appendChild(titoloCanale);

                programmi.forEach(programma => {
                    const nomeFilm = programma.querySelector('NomeFilm').textContent;
                    const oraInizio = programma.querySelector('Ora_Inizio').textContent;
                    const oraFine = programma.querySelector('Ora_Fine').textContent;
                    const durata = programma.querySelector('Durata').textContent;
                    const categoria = programma.querySelector('Categoria').textContent;

                    const programmaDiv = document.createElement('div');
                    programmaDiv.classList.add('programma');

                    programmaDiv.innerHTML = `
                        <strong>Nome Film:</strong> ${nomeFilm}<br>
                        <strong>Ora Inizio:</strong> ${oraInizio}<br>
                        <strong>Ora Fine:</strong> ${oraFine}<br>
                        <strong>Durata:</strong> ${durata}<br>
                        <strong>Categoria:</strong> ${categoria}
                    `;

                    canaleDiv.appendChild(programmaDiv);
                });

                canaliDiv.appendChild(canaleDiv);
            });
        });
});
