async function getChar() {
    let response = await axios.get("js/characters.json");
    return response.data;
}


let charIcon = document.querySelector(".character-menu")

charIcon.addEventListener("click", async function (e) {
    let character = await getChar();

    let charName = character[e.target.id]["charName"];
    let charLastName = character[e.target.id]["charLastName"]
    let charDescription = character[e.target.id]["charDescription"];
    let charPortrait = character[e.target.id]["charPortrait"]

    document.querySelector("#character-name").innerHTML = charName;
    document.querySelector("#character-lastname").innerHTML = charLastName;
    document.querySelector("#character-desc").innerHTML = `<p class="desc-text">${charDescription}</p>`;
    document.querySelector("#character-portrait").innerHTML = `<img src="${charPortrait}" class="portrait-size"/>`;
})