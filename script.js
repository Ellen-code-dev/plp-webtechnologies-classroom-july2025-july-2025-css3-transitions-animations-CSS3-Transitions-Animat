// Global variable
let globalMessage = "Welcome to my page!";

// Function with parameters + return
function calculateArea(width, height) {
  return width * height;
}

// Using local vs global scope
function showMessage() {
  let localMessage = "This is inside a function"; // local scope
  console.log(globalMessage); // can access global
  console.log(localMessage);  // only works here
}

// Trigger DOM change using function
function changeBoxColor(color) {
  const box = document.querySelector(".box");
  box.style.backgroundColor = color;
}

// Example usage
console.log("Area:", calculateArea(5, 10));
showMessage();
