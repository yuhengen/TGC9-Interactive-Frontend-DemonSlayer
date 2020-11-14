// Loading screen transition
let overlay = document.querySelector("#overlay");

// window.addEventListener("load", function () {
//     overlay.style.opacity = "0"
// });

setTimeout(function() {
    let body = document.querySelector("body");
    overlay.style.opacity = "0"
    body.style.overflow = "scroll";
},1500)

setTimeout(function() {
    // let body = document.querySelector("body");
    // body.removeChild(overlay)
    overlay.remove()
},2500)