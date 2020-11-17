async function getChar() {
    let response = await axios.get("js/characters.json");
    return response.data;
}


let charIcon = document.querySelector(".character-menu")

charIcon.addEventListener("click", async function (e) {
    let character = await getChar();

    if (character.hasOwnProperty(e.target.id)) {
        document.querySelector("#character-name").innerHTML = character[e.target.id]["charName"];
        document.querySelector("#character-lastname").innerHTML = character[e.target.id]["charLastName"];
        document.querySelector("#character-desc").innerHTML = `<p class="desc-text">${character[e.target.id]["charDescription"]}</p>`
        document.querySelector("#character-portrait").innerHTML = `<img src="${character[e.target.id]["charPortrait"]}" class="portrait-size"/>`
    }
})