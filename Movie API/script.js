const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0018f2ed5cf91a94365b4ff9629631be&page=1";

const langCode = "&language=de"

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=0018f2ed5cf91a94365b4ff9629631be&query="';

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

const showMovies = (moviesArray) => {
  main.innerHTML = "";

  moviesArray.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieEl.innerHTML = `
    ${poster_path 
    ? `<img src="${IMG_PATH + poster_path}" alt="{title}" />`
    : `<div class="image-replacer">
        <div>Schade,</div>
        <div>kein Poster in der Datenbank.</div>
       </div>`}
    <div class="movie-info">
      <h3>${title}</h3>
      <span class="${getClassByRate(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
      <h3>Kurzübersicht</h3>
      ${overview
      ? `${overview}`
      : `<span>Huch 🤭</span>
      <div> noch keine Kurzübersicht in der Datenbank</div>`
    }
    </div>
    `
    main.appendChild(movieEl)
  })
};

const getClassByRate = (vote) => {
  if (vote >= 8) {
    return 'green'
  } else if (vote >= 5) {
    return 'orange'
  } else {return 'red'}
}

// Get initial movies
getMovies(API_URL + langCode);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  // console.log(data.results)
  showMovies(data.results);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm + langCode);

    search.value = "";
  } else {
    window.location.reload();
  }
});
