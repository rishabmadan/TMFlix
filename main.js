function redirectToMovie() {
    const movieId = document.getElementById('movieIdInput').value;

    const movieUrlTemplate = 'https://vidsrc.to/embed/movie/{id}';
    const movieUrl = movieUrlTemplate.replace('{id}', movieId);

    window.open(movieUrl, '_blank');
}

function redirectToTv() {
    const tvId = document.getElementById('tvIdInput').value;

    const tvUrlTemplate = 'https://vidsrc.to/embed/tv/{id}';
    const tvUrl = tvUrlTemplate.replace('{id}', tvId);

    window.open(tvUrl, '_blank');
}

const omdbkey='44991e20'

function fetchIMDbID() {
    const apiKey = omdbkey;
    const movieTitle = document.getElementById('movieTitle').value;
    const apiUrl = `https://www.omdbapi.com/?t=${encodeURIComponent(movieTitle)}&apikey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.Response === 'True') {
                const imdbID = data.imdbID;
                document.getElementById('result').innerHTML = `${imdbID}`;
            } else {
                document.getElementById('result').innerHTML = 'Movie not found. Please check the title.';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('result').innerHTML = 'An error occurred while fetching data.';
        });
}



