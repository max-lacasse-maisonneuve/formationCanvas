const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.querySelector(".close-icon");
const nav = document.querySelector("nav");

function init() {
    nav.addEventListener("click", (e) => {
        menuBtn.checked = false;
    });
}

window.addEventListener("load", init);
