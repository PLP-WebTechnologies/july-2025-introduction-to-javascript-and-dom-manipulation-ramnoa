/* * Variable declarations and conditionals (Part 1)
    * At least 2 custom functions (Part 2)
    * At least 2 loop examples (Part 3)
    * At least 3 DOM interactions (Part 4)*/
// Part 1: Variable declarations and conditionals
let userName = prompt("Enter your name:");
let userAge = parseInt(prompt("Enter your age:"));
let accessMessage = "";
if (userAge >= 18) {
    accessMessage = "Access granted. Welcome, " + userName + "!";
}
else {
    accessMessage = "Access denied. You must be at least 18 years old.";
}
alert(accessMessage);
// Part 2: Custom functions
function greetUser(name) {
    return "Hello, " + name + "! Welcome to our website.";
}
function calculateSquare(number) {
    return number * number;
}
alert(greetUser(userName));
let numberToSquare = parseInt(prompt("Enter a number to square:"));
alert("The square of " + numberToSquare + " is " + calculateSquare(numberToSquare) + ".");
// Part 3: Loop examples
let colors = ["Red", "Green", "Blue", "Yellow"];
let colorList = "Available colors:\n";
for (let i = 0; i < colors.length; i++) {
    colorList += colors[i] + "\n";
}
alert(colorList);
let countDown = "";
for (let i = 5; i > 0; i--) {
    countDown += i + "...\n";
}
alert("Countdown:\n" + countDown + "Go!");
// Part 4: DOM interactions
document.body.style.fontFamily = "Arial, sans-serif";
let header = document.createElement("h1");
header.textContent = "Welcome to the JavaScript and DOM Manipulation Demo";
document.body.appendChild(header);
let colorListElement = document.createElement("ul");
colors.forEach(color => {
    let listItem = document.createElement("li");
    listItem.textContent = color;
    colorListElement.appendChild(listItem);
});
document.body.appendChild(colorListElement);    
let footer = document.createElement("footer");
footer.textContent = "Thank you for visiting!";
document.body.appendChild(footer);
footer.style.marginTop = "20px";
footer.style.fontSize = "14px";