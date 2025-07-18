const nav = document.querySelector(".nav");

// We'll add the .is-stuck class after scrolling 1 pixel down.
const triggerPoint = 1; 

let isThrottled = false;

function checkStickyState() {
  const hasScrolled = window.scrollY >= triggerPoint;
  nav.classList.toggle('sticky', hasScrolled);
  isThrottled = false;
}

// Add the event listener to the window
window.addEventListener('scroll', () => {
  if (!isThrottled) {
    isThrottled = true;
    // Use requestAnimationFrame for smooth, performant execution
    requestAnimationFrame(checkStickyState);
  }
});

// IMPORTANT: Run the check once on page load in case the
// page loads already scrolled down (e.g., after a refresh).
checkStickyState();