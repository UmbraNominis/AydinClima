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