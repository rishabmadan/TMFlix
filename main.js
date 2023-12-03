function redirectToMovie() {
    const movieId = document.getElementById('movieIdInput').value;

    const movieUrlTemplate = 'https://vidsrc.to/embed/movie/{id}';
    const movieUrl = movieUrlTemplate.replace('{id}', movieId);

    window.open(movieUrl, '_blank');
}

function fetchIMDbID() {
    const apiKey = '44991e20';
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

function copyText() {
    var resultElement = document.getElementById('result');
    var range = document.createRange();
    range.selectNode(resultElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Text copied to clipboard!');
}
