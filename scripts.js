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