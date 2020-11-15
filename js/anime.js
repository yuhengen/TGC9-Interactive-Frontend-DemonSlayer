async function getAnime() {
    let url = "https://imdb-api.com/en/API/Title/k_418swyln/tt9335498";
    let response = await axios.get(url);
    return response.data;
}

async function displayInfo() {
    let anime = await getAnime();

    let animeTitle = anime.fullTitle;
    let animePoster = anime.image;
    let animeDesc = anime.plot;
    let animeRate = anime.imDbRating;

    let intro = document.querySelector("#anime-banner");
    intro.innerHTML = `<div class="p-2"><img src="${animePoster}" height="400"/></div>
    <div class="p-2"><h1>${animeTitle}</h1><br/>
    <p>${animeDesc}</p><br/>
    <p>IMDB Rating: ${animeRate}/10</p><br/>
    <p>Watch ${animeTitle} on: <a href="https://www.netflix.com/title/81091393">Netflix</a> | <a href="https://www.hulu.com/series/demon-slayer-kimetsu-no-yaiba-2c3e4b00-30d9-434d-bccc-cf346e40e868">Hulu</a></p></div>`
}

async function getEpisode() {
    let url = "https://imdb-api.com/en/API/SeasonEpisodes/k_418swyln/tt9335498/1";
    let response = await axios.get(url);
    return response.data;
}

// function displayEpisode() {
//     for (let i = 0; i < 25; i++) {
//         let episodeInfo = document.querySelector("#episodes-info");
//         episodeInfo.innerHTML += `<div id="heading${i}" class="card-header">
//         <h3 class="mb-0">
//             <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="false" aria-controls="collapse${i}">
//               <h3>Episode ${i}<h3>
//             </button>
//           </h3>
//         </div>

//         <div id="collapse${i}" class="collapse" aria-labelledby="heading${i}" data-parent="#accordion">
//         <div class="d-flex align-items-center">
//         <div>Image ${i}</div>
//           <div class="card-body">
//             Episode Synopsis:<br/>
//             <p>Description ${i}</p>
//           </div>
//           </div>
//         </div>`
//     }
// }

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
          <h3>Episode ${i+1} - ${epiTitle}</h3>
        </button>
      </h3>
    </div>

    <div id="collapse${i}" class="collapse" aria-labelledby="heading${i}" data-parent="#accordion">
    <div class="d-flex align-items-center">
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