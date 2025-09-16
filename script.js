

// Global variable
let globalMessage = "Welcome to my page!";

// Function with parameters + return
function calculateArea(width, height) {
  return width * height;
}

// Function to demonstrate scope
function showMessage() {
  let localMessage = "This is inside a function"; // local scope
  console.log(globalMessage); // can access global
  console.log(localMessage);  // only works here
}

// Function to change box color
function changeBoxColor(color) {
  const box = document.querySelector(".box");
  box.style.backgroundColor = color;
}

// Example usage
console.log("Area:", calculateArea(5, 10));
showMessage();
changeBoxColor("lightgreen"); // changes box color at start



// Function to animate box when button clicked
function animateBox() {
  const box = document.querySelector(".box");
  box.classList.toggle("move"); // toggle CSS animation
}

// Event listener for button click
document.getElementById("animateBtn").addEventListener("click", animateBox);

showMessage();
