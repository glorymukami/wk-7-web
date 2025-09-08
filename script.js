/* ====== Part 2: Functions, Scope, Parameters & Return Values ====== */

// Global variable to track number of clicks
let clickCount = 0;

/**
 * Function: updateClickMessage
 * Purpose: Increase click count and return a dynamic message
 * Demonstrates: parameters + return value
 */
function updateClickMessage(userName) {
  clickCount++; // local scope within function affects global var
  return `${userName}, you have clicked ${clickCount} time(s)!`;
}

/**
 * Function: toggleBoxAnimation
 * Purpose: Toggles the 'active' class on the box to start/stop CSS animation
 * Demonstrates: function reusability & DOM manipulation
 */
function toggleBoxAnimation() {
  const box = document.getElementById("box");
  box.classList.toggle("active");

  // Call our custom function and log result
  let message = updateClickMessage("Glory");
  console.log(message);
}

/**
 * Function: flipCard
 * Purpose: Adds/removes 'flipped' class to trigger CSS 3D flip animation
 */
function flipCard() {
  const card = document.getElementById("flipCard");
  card.classList.toggle("flipped");
}

/* ====== Part 3: Event Listeners ====== */
document.getElementById("animateBtn").addEventListener("click", toggleBoxAnimation);
document.getElementById("flipCard").addEventListener("click", flipCard);
