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
    intro.innerHTML += `<div class="p-2"><img src="${animePoster}"/></div>
    <div class="p-2"><h1>${animeTitle}</h1><br/>
    <p>${animeDesc}</p><br/>
    <p>IMDB Rating: ${animeRate}/10</p></div>`
}

async function getEpisode() {
    let url = "https://imdb-api.com/en/API/SeasonEpisodes/k_418swyln/tt9335498/1";
    let response = await axios.get(url);
    return response.data;
}

displayInfo()