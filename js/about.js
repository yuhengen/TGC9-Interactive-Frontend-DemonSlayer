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