// Loading screen transition
let overlay = document.querySelector("#overlay");

window.onload = function () {
  setTimeout(function () {
    let body = document.querySelector("body");
    overlay.style.opacity = "0"
    body.style.overflowY = "scroll";
  }, 1000)

  setTimeout(function () {
    overlay.remove()
  }, 2000)
};

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

//Get the button
let toTopBtn = document.querySelector(".toTopBtn");

// When the user scrolls down 500px from the top of the document, show the button
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