console.log("Scripts Work")

const hamburger = document.querySelector(".hamburger");
const offmenu = document.querySelector(".off-menu");

console.log(offmenu);

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    offmenu.classList.toggle("active");
});

const nav = document.querySelector(".nav");
console.log(nav);

const watch = document.querySelector(".hero-button");

function observerCallback(payload){
    console.log(payload[0].isIntersecting);
    nav.classList.toggle("sticky", !payload[0].isIntersecting);
}

const observer = new IntersectionObserver(observerCallback);
observer.observe(watch);