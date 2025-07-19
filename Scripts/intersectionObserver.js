const nav = document.querySelector(".nav");
const watch = document.createElement("div"); // Create a Div that Will be Used to Tell when the Navbar went Offscreen
watch.setAttribute("js-scroll-watcher", ""); // Set an Attribute for Clarity
nav.before(watch); // Place the Div Before the Navbar

const onHomePage = window.location.pathname === "/index.html";

const themeColor = document.querySelector("meta[name=theme-color]");

function observerCallback(payload){
    nav.classList.toggle("sticky", !payload[0].isIntersecting); // Toggle the sticky class of the Navbar depending on wether the Scroll Div is Visible
}

function observerCallbackWithDynamicThemeColor(payload){
    nav.classList.toggle("sticky", !payload[0].isIntersecting); // Toggle the sticky class of the Navbar depending on wether the Scroll Div is Visible
    themeColor.setAttribute("content", !payload[0].isIntersecting ? "white" : "#253a64");
}

const observer = new IntersectionObserver(onHomePage ? observerCallbackWithDynamicThemeColor : observerCallback);
observer.observe(watch);