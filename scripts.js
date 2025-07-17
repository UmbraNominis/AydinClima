let module;
if (document.URL !== "https://umbranominis.github.io/AydinClima/") {
    module = await import ("/Data/air-conditioners.json", { with: { type: "json" } });
}
else {
    module = await import ("https://umbranominis.github.io/AydinClima/Data/air-conditioners.json", { with: { type: "json" } });
}

let acs = module.default;


const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});

const nav = document.querySelector(".nav");
const watch = document.createElement("div"); // Create a Div that Will be Used to Tell when the Navbar went Offscreen
watch.setAttribute("js-scroll-watcher", ""); // Set an Attribute for Clarity
nav.before(watch); // Place the Div Before the Navbar

function observerCallback(payload){
    nav.classList.toggle("sticky", !payload[0].isIntersecting); // Toggle the sticky class of the Navbar depending on wether the Scroll Div is Visible
    
    // Optimize this
    if (!payload[0].isIntersecting) document.querySelector('meta[name="theme-color"]').setAttribute('content', '#2b6bec');
        else document.querySelector('meta[name="theme-color"]').setAttribute('content', '#2d4470');
}

const observer = new IntersectionObserver(observerCallback);
observer.observe(watch);

const searchBox = document.querySelector(".search-container");
if (searchBox != null)
{
    const searchHeader = document.querySelector(".search-header");
    const watchSearch = document.createElement("div");
    watchSearch.setAttribute("js-scroll-watcher-search", "");
    searchHeader.before(watchSearch);

    function observerCallback2(payload){
        console.log(payload[0].isIntersecting);
        searchBox.classList.toggle("sticky", !payload[0].isIntersecting);
    }
    const observer2 = new IntersectionObserver(observerCallback2);
    observer2.observe(watchSearch);
}

const acBestSelling = document.querySelector(".ac-best-selling");
acs.forEach(ac => {
    let card = document.createElement("div");
    card.className = "ac-card";
    card.innerHTML = `
        <img class="ac-image" loading="lazy" src="${ac["image-url"]}">
        <h3 class="ac-title">${ac.name}</h3>
        <h4 class="ac-brand">${ac.brand}</h4>
        <div class="ac-hot-cold-cards">
            <div class="ac-hot-cold-card ac-hot-cold-card-sun">
                <svg class="ac-svg ac-svg-sun" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16"><path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/></svg>
                <b style="font-weight: 550;">Мощност:</b> ${ac["power-heating"]} kW<br>
                <b style="font-weight: 550;">Консумация:</b> ${ac["consumption-heating"]} kW<br>
                <b style="font-weight: 550;">Енергиен клас:</b> ${ac["energyclass-heating"]}
            </div>
            <div class="ac-hot-cold-card ac-hot-cold-card-snow">
                <svg class="ac-svg ac-svg-snow" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16"><path d="M8 16a.5.5 0 0 1-.5-.5v-1.293l-.646.647a.5.5 0 0 1-.707-.708L7.5 12.793V8.866l-3.4 1.963-.496 1.85a.5.5 0 1 1-.966-.26l.237-.882-1.12.646a.5.5 0 0 1-.5-.866l1.12-.646-.884-.237a.5.5 0 1 1 .26-.966l1.848.495L7 8 3.6 6.037l-1.85.495a.5.5 0 0 1-.258-.966l.883-.237-1.12-.646a.5.5 0 1 1 .5-.866l1.12.646-.237-.883a.5.5 0 1 1 .966-.258l.495 1.849L7.5 7.134V3.207L6.147 1.854a.5.5 0 1 1 .707-.708l.646.647V.5a.5.5 0 1 1 1 0v1.293l.647-.647a.5.5 0 1 1 .707.708L8.5 3.207v3.927l3.4-1.963.496-1.85a.5.5 0 1 1 .966.26l-.236.882 1.12-.646a.5.5 0 0 1 .5.866l-1.12.646.883.237a.5.5 0 1 1-.26.966l-1.848-.495L9 8l3.4 1.963 1.849-.495a.5.5 0 0 1 .259.966l-.883.237 1.12.646a.5.5 0 0 1-.5.866l-1.12-.646.236.883a.5.5 0 1 1-.966.258l-.495-1.849-3.4-1.963v3.927l1.353 1.353a.5.5 0 0 1-.707.708l-.647-.647V15.5a.5.5 0 0 1-.5.5z"/></svg>
                <b style="font-weight: 550;">Мощност:</b> ${ac["power-cooling"]} kW<br>
                <b style="font-weight: 550;">Консумация:</b> ${ac["consumption-cooling"]} kW<br>
                <b style="font-weight: 550;">Енергиен клас:</b> ${ac["energyclass-cooling"]}
            </div>
        </div>
        <div class="ac-body-container">
            <p class="ac-body">
                <b style="font-weight: 550;">Капацитет:</b> ${ac.capacity} Btu<br>
                <b style="font-weight: 550;">Размер В х Ш х Д:</b> ${ac.dimensions}<br>
                <b style="font-weight: 550;">Звуково налягане:</b> ${ac.sound} dB<br>
                <b style="font-weight: 550;">Работа до:</b> ${ac["lowest-temp"]}<sup>o</sup><br>
                <b style="font-weight: 550;">Гаранция:</b> ${ac.warranty} месеца<br>
            </p>
        </div>
        <h4 class="ac-price">${ac.price} лв.</h4>
        <p class="ac-price-sub">+ Безплатен Монтаж</p>
        <div class="ac-buttons">
            <button class="ac-button"><svg class="ac-button-svg" xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 16 16"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/></svg>Направи Поръчка</button>
        </div>`;
    card.querySelector(".ac-button").addEventListener("click", () => {
        modal.showModal();
    });
    acBestSelling.appendChild(card);
});


const modal = document.querySelector("#order-modal");
const contactButton = document.querySelector(".nav-contact-button");
const contactButtonMobile = document.querySelector(".nav-contact-button-mobile");
const closeButton = document.querySelector("#close-button");

modal.addEventListener("click", e => {
  const modalDimensions = modal.getBoundingClientRect()
  if (
    e.clientX < modalDimensions.left ||
    e.clientX > modalDimensions.right ||
    e.clientY < modalDimensions.top ||
    e.clientY > modalDimensions.bottom
  ) {
    modal.close()
  }
});

closeButton.addEventListener("click", () => {
    modal.close();
});

contactButton.addEventListener("click", () => {
    modal.showModal();
});

contactButtonMobile.addEventListener("click", () => {
    modal.showModal();
});

const search = document.querySelector("#search");
console.log(search);
if (search != null) {
    
    const acCards = document.querySelectorAll(".ac-card");
    console.log(acCards);
    
    search.addEventListener("input", (e) => {
        console.log(e.target.value);

        acCards.forEach(child => {
            let matchesQuery = child.querySelector(".ac-title").textContent.includes(e.target.value) 
            || child.querySelector(".ac-brand").textContent.includes(e.target.value);
            child.classList.toggle("hidden", !matchesQuery);
        });
    });


}