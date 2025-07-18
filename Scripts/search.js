const search = document.querySelector("#search");
console.log(search);
if (search != null) {
    
    const acCards = document.querySelectorAll(".ac-card");
    console.log(acCards);
    
    search.addEventListener("input", (e) => {
        console.log(e.target.value);

        acCards.forEach(child => {
            let matchesQuery = child.querySelector(".ac-title").textContent.toLowerCase().includes(e.target.value.toLowerCase());
            child.classList.toggle("hidden", !matchesQuery);
        });
    });
}