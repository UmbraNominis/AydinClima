console.log("Scripts Work")

const hamburger = document.querySelector(".hamburger");
const offmenu = document.querySelector(".off-menu");

console.log(offmenu);

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    offmenu.classList.toggle("active");
});

const nav = document.querySelector(".nav");
const watch = document.createElement("div"); // Create a Div that Will be Used to Tell when the Navbar went Offscreen
watch.setAttribute("js-scroll-watcher", ""); // Set an Attribute for Clarity
nav.before(watch); // Place the Div Before the Navbar

function observerCallback(payload){
    nav.classList.toggle("sticky", !payload[0].isIntersecting); // Toggle the sticky class of the Navbar depending on wether the Scroll Div is Visible
}

const observer = new IntersectionObserver(observerCallback);
observer.observe(watch);