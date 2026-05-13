import CONFIG from "./config.js";
const searchInput = document.querySelector('#searchMovie')
const emptyContainer = document.querySelector('.empty-container')
const mainContainer = document.querySelector('.movie-listing')
let moviesList = []
let id = null;
let timeId;
const movieListingContainer = document.querySelector('.movie-listing');

const renderInUI = (movieData) => {
    emptyContainer.style.display = 'none';
    movieListingContainer.innerHTML = '';

    movieData.forEach((data) => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        movieCard.innerHTML = `
        <img src="${data.Poster}" alt="${data.Title}">
        <div>
            <h1>${data.Title}</h1>
            <span>Year ${data.Year}</span>
        </div>
        <div class="intro">${data.Title}</div>
    `;

        movieListingContainer.appendChild(movieCard);
    })
};



const loadMovies = async (searchValue) => {
    try {
        const url = `${CONFIG.API_BASE_URL}?apiKey=${CONFIG.MOVIE_API_KEY}&s=${searchValue}`
        const response = await fetch(`${url}`)
        const resp = await response.json()
        moviesList = resp.Search
        renderInUI(moviesList)
    } catch (error) {
        console.log(error.message)
    }
}
searchInput.addEventListener('input', async (e) => {
    const searchValue = e.target.value;
    if (!searchValue.trim()) {
        emptyContainer.style.display = 'flex'
        movieListingContainer.innerHTML = '';
        movieListingContainer.style.display = 'none'
        return
    }

    clearTimeout(timeId)
    timeId = setTimeout(() => {
        loadMovies(searchValue)
    }, 400);

})
