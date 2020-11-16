// Loading screen transition
let overlay = document.querySelector("#overlay");

// window.addEventListener("load", function () {
//     overlay.style.opacity = "0"
//    body.style.overflow = "scroll";
// });

setTimeout(function() {
    let body = document.querySelector("body");
    overlay.style.opacity = "0"
    body.style.overflow = "scroll";
},2000)

setTimeout(function() {
    // let body = document.querySelector("body");
    // body.removeChild(overlay)
    overlay.remove()
},3000)