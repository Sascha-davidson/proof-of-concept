const buttons = document.querySelectorAll(`button`)
const menuBackground = document.querySelector(`body nav .background`);
const background = document.querySelector(`body > .background`);
const content = document.querySelector(`.content-container`)
const displayTime = document.querySelector(`.display-time`)

let backgoundPositions = [0, 25, 50, 75, 100];
let contentPositions = [-0, -20, -40, -60, -80]
let currentPosition = 0;
let menuBackgroundPositions = [0, 100, 200, 300, 400]

var incomeTicker = 60;

buttons.forEach (button => button.hidden = false)
displayTime.hidden = false

function NextPosition() {
  currentPosition += 1;
  if (currentPosition >= backgoundPositions.length) currentPosition = 0;
  UpdateBackgroundPosition();
}

function SetPosition(newpostion) {
  currentPosition = newpostion;
  UpdateBackgroundPosition();
}

function UpdateBackgroundPosition() {
  background.style.backgroundPosition = backgoundPositions[currentPosition] + `% ` + backgoundPositions[currentPosition] + `%`;
  menuBackground.style.transform = "translateX(" + menuBackgroundPositions[currentPosition] + "%)";
  content.style.transform = "translateX(" + contentPositions[currentPosition] + "%)";
}

setInterval(() => {
  NextPosition();
}, 60000);


setInterval(() => {
    if (incomeTicker > 0)
    incomeTicker--;
       document.getElementById("incomeTicker").innerHTML = "Next slide: " + incomeTicker + " seconds";
 if (incomeTicker <= 0)
   incomeTicker = 60;
 }, 1000);