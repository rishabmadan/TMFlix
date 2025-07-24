function redirectToMovie() {
    const movieTitle = document.getElementById('movieIdInput').value;

    fetchIMDbID(movieTitle, 'movie');
}

function redirectToTv() {
    const movieTitle = document.getElementById('tvIdInput').value;

    fetchIMDbID(movieTitle, 'tv');
}

const omdbkey = '7423c9bb';

function fetchIMDbID(title, type) {
    const apiKey = omdbkey;
    const apiUrl = `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.Response === 'True') {
                document.getElementById('result').innerHTML = 'Media found.';
                const imdbID = data.imdbID;
                if (type === 'movie') {
                    redirectToMovieById(imdbID);
                } else {
                    redirectToTvById(imdbID);
                }
            } else {
                document.getElementById('result').innerHTML = 'Media not found. Please check the title.';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('result').innerHTML = 'An error occurred while fetching data.';
        });
}

function redirectToMovieById(movieId) {
    const movieUrlTemplate = 'https://vidsrc.to/embed/movie/{id}';
    const movieUrl = movieUrlTemplate.replace('{id}', movieId);

    window.open(movieUrl, '_blank');
}

function redirectToTvById(tvId) {
    const tvUrlTemplate = 'https://vidsrc.to/embed/tv/{id}';
    const tvUrl = tvUrlTemplate.replace('{id}', tvId);

    window.open(tvUrl, '_blank');
}