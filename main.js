const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Move No Button Slightly Within a Small Range
btnNo.addEventListener("mouseover", () => {
  const moveX = getRandomNumber(-50, 50); // Small movement left/right
  const moveY = getRandomNumber(-50, 50); // Small movement up/down

  btnNo.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Redirect to New Page on Clicking Yes
btnYes.addEventListener("click", () => {
  window.location.href = "yes.html";
});

document.querySelectorAll('.dateOption').forEach(button => {
  button.addEventListener('click', () => {
      // Get the date option that was clicked
      const dateChoice = button.getAttribute('data-date');
      
      // Redirect to a new page with the selected date option
      window.location.href = `datePage.html?date=${dateChoice}`;
  });
});
