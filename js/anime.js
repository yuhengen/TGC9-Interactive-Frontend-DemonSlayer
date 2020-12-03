// Loading screen transition
let overlay = document.querySelector("#overlay");

window.onload = function () {
  setTimeout(function () {
    let body = document.querySelector("body");
    overlay.style.opacity = "0"
    body.style.overflowY = "scroll";
  }, 2000)

  setTimeout(function () {
    overlay.remove()
  }, 3000)
};

async function getAnime() {
  let url = "https://imdb-api.com/en/API/Title/k_418swyln/tt9335498";
  let response = await axios.get(url);
  return response.data;
}

async function getEpisode() {
  let url = "https://imdb-api.com/en/API/SeasonEpisodes/k_418swyln/tt9335498/1";
  let response = await axios.get(url);
  return response.data;
}

async function displayInfo() {
  let anime = await getAnime();

  let animeTitle = anime.fullTitle;
  let animePoster = anime.image;
  let animeDesc = anime.plot;
  let animeRate = anime.imDbRating;
  let animeShortTitle = anime.title

  let intro = document.querySelector("#anime-banner");
  intro.innerHTML = `<div class="p-2"><img src="${animePoster}" id="anime-poster"/></div>
    <div class="p-2"><h1>${animeTitle}</h1><br/>
    <p>${animeDesc}</p><br/>
    <p>IMDB Rating: ${animeRate}/10</p><br/>
    <p>Watch ${animeShortTitle} on: <a href="https://www.netflix.com/title/81091393" target="_blank">Netflix</a> | <a href="https://www.hulu.com/series/demon-slayer-kimetsu-no-yaiba-2c3e4b00-30d9-434d-bccc-cf346e40e868" target="_blank">Hulu</a></p></div>`
}

async function displayEpisode() {
  let epi = await getEpisode();

  for (let i = 0; i <= epi.episodes.length; i++) {
    let epiTitle = epi.episodes[i].title;
    let epiImage = epi.episodes[i].image;
    let epiPlot = epi.episodes[i].plot;

    let episodeInfo = document.querySelector("#episodes-info");
    episodeInfo.innerHTML += `<div id="heading${i}" class="card-header">
    <h3 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="false" aria-controls="collapse${i}">
          <h4>Episode ${i + 1}:</h4><h5>${epiTitle}</h5>
        </button>
      </h3>
    </div>

    <div id="collapse${i}" class="collapse" aria-labelledby="heading${i}" data-parent="#accordion">
    <div class="d-flex align-items-center flex-wrap">
    <div><img src="${epiImage}" class="episode-image"/></div>
      <div class="card-body">
        <u>Episode Synopsis:</u><br/>
        <p>${epiPlot}</p>
      </div>
      </div>
    </div>`
  }
}

displayInfo();
displayEpisode();

//Get the button
let toTopBtn = document.querySelector(".toTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function toTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}