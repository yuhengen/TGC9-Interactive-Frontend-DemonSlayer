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
    intro.innerHTML = `<div class="p-2"><img src="${animePoster}"/></div>
    <div class="p-2"><h1>${animeTitle}</h1><br/>
    <p>${animeDesc}</p><br/>
    <p>IMDB Rating: ${animeRate}/10</p></div>`
}

async function getEpisode() {
    let url = "https://imdb-api.com/en/API/SeasonEpisodes/k_418swyln/tt9335498/1";
    let response = await axios.get(url);
    return response.data;
}

// async function displayEpisode() {
//     let epi = await getEpisode();

//     for (let i = 0; i < epi.episodes.length; i++) {
//         let epiTitle = epi.episodes[i].title;
//         let epiImage = epi.episodes[i].image;
//         let epiPlot = epi.episodes[i].plot;

//         let episodeInfo = document.querySelector("#episodes-info");
//         episodeInfo.innerHTML = `<div id="heading${i}" class="card-header">
//     <h3 class="mb-0">
//         <button class="btn btn-link" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
//           <h3>Episode ${i} - ${epiTitle}</h3>
//         </button>
//       </h3>
//     </div>

//     <div id="collapse${i}" class="collapse show" aria-labelledby="heading${i}" data-parent="#accordion">
//     <div class="d-flex align-items-center">
//     <div><img src="${epiImage}"/></div>
//       <div class="card-body">
//         Episode Synopsis:<br/>
//         <p>${epiPlot}</p>
//       </div>
//       </div>
//     </div>`
//     }
// }

function displayEpisode() {
    for (let i = 0; i < 25; i++) {
        let episodeInfo = document.querySelector("#episodes-info");
        episodeInfo.innerHTML += `<div id="heading${i}" class="card-header">
        <h3 class="mb-0">
            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="false" aria-controls="collapse${i}">
              <h3>Episode ${i}<h3>
            </button>
          </h3>
        </div>

        <div id="collapse${i}" class="collapse" aria-labelledby="heading${i}" data-parent="#accordion">
        <div class="d-flex align-items-center">
        <div>Image ${i}</div>
          <div class="card-body">
            Episode Synopsis:<br/>
            <p>Description ${i}</p>
          </div>
          </div>
        </div>`
    }
}

displayEpisode();
// displayInfo();