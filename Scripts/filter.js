const filterButton = document.querySelector(".filter-svg");
const filterMenu = document.querySelector(".filter-menu");

filterButton.addEventListener("click", () => {
    filterMenu.classList.toggle("active");
});