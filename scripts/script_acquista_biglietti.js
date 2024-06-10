document.addEventListener('DOMContentLoaded', () => {
    const movieSelect = document.getElementById('movie');
    const dateSelect = document.getElementById('date');
    const movieData = {};

    fetch('../data/movies.xml')
        .then(response => {
            if (response.ok) {
                return response.text();
            } else {
                throw new Error('Network error');
            }
        })
        .then(str => (new window.DOMParser()).parseFromString(str, 'text/xml'))
        .then(data => {
            const movies = data.getElementsByTagName('movie');

            // Popola la select dei film
            for (let i = 0; i < movies.length; i++) {
                const id = movies[i].getElementsByTagName('id')[0].textContent;
                const title = movies[i].getElementsByTagName('title')[0].textContent;
                const dates = movies[i].getElementsByTagName('date');

                const option = document.createElement('option');
                option.value = id;
                option.textContent = title;
                movieSelect.appendChild(option);

                // Memorizza le date associate al film
                movieData[id] = [];
                for (let j = 0; j < dates.length; j++) {
                    movieData[id].push(dates[j].textContent);
                }
            }

            // Aggiorna la select delle date quando cambia il film selezionato
            movieSelect.addEventListener('change', (e) => {
                const selectedMovieId = e.target.value;
                const dates = movieData[selectedMovieId];

                // Svuota la select delle date
                dateSelect.innerHTML = '';

                // Popola la select delle date con le nuove opzioni
                dates.forEach(date => {
                    const option = document.createElement('option');
                    option.value = date;
                    option.textContent = date;
                    dateSelect.appendChild(option);
                });
            });

            // Simula un cambiamento per inizializzare la select delle date
            movieSelect.dispatchEvent(new Event('change'));

            // Seleziona automaticamente il film basato sul parametro URL
            const urlParams = new URLSearchParams(window.location.search);
            const selectedFilm = urlParams.get('film');
            if (selectedFilm) {
                for (let i = 0; i < movieSelect.options.length; i++) {
                    if (movieSelect.options[i].textContent === selectedFilm) {
                        movieSelect.selectedIndex = i;
                        movieSelect.dispatchEvent(new Event('change'));
                        break;
                    }
                }
            }
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });

    document.getElementById('ticketForm').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Biglietti acquistati con successo!');
    });
});
