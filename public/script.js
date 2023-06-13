const menuBackground = document.querySelector(`body nav .background`);
const background = document.querySelector(`body > .background`);
const content = document.querySelector(`.content-container`);
const displayTime = document.querySelector(`.display-time`);
const nav = document.querySelector(`header nav`);
const nextSlide = document.querySelector(`.menu-text p`);
const contentContainer = document.querySelector(`#content-container`);
const h1 = document.querySelector(`h1`);

let backgoundPositions = [0, 25, 50, 75, 100];
let contentPositions = [-0, -20, -40, -60, -80];
let currentPosition = 0;
let menuBackgroundPositions = [0, 100, 200, 300, 400];

var incomeTicker = 60;

if (h1){
  h1.innerHTML = "Current page title";
}

if (contentContainer) {
  contentContainer.classList.add("content-container-js");
}

if (displayTime) {
  displayTime.hidden = false;
}

if (nav) {
  nav.hidden = false;
}

if (nextSlide) {
  nextSlide.hidden = false;
}

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
  background.style.backgroundPosition =
    backgoundPositions[currentPosition] +
    `% ` +
    backgoundPositions[currentPosition] +
    `%`;
  menuBackground.style.transform =
    "translateX(" + menuBackgroundPositions[currentPosition] + "%)";
  content.style.transform =
    "translateX(" + contentPositions[currentPosition] + "%)";
}

setInterval(() => {
  NextPosition();
}, 60000);

setInterval(() => {
  if (incomeTicker > 0) incomeTicker--;
  document.getElementById("incomeTicker").innerHTML =
    "Next slide: " + incomeTicker + " seconds";
  if (incomeTicker <= 0) incomeTicker = 60;
}, 1000);
