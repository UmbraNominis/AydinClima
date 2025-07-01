console.log("Scripts Work")

const hamburger = document.querySelector(".hamburger");
const offmenu = document.querySelector(".off-menu");

console.log(offmenu);


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    offmenu.classList.toggle("active");
})