const menuBackground = document.querySelector(`body nav .background`);
const background = document.querySelector(`body > .background`);
const content = document.querySelector(`.content-container`);
const displayTime = document.querySelector(`.display-time`);
const nav = document.querySelector(`header nav`);
const nextSlide = document.querySelector(`.menu-text`);
const contentContainer = document.querySelector(`#content-container`);
const buttons = document.querySelectorAll(`button`);
const CurrentYear = document.querySelectorAll(`.current-year`);

let backgoundPositions = [0, 50, 100];
let contentPositions = [-0, -33.33, -66.66];
let currentPosition = 0;
let menuBackgroundPositions = [0, 100, 200];
let pageLoopInterval;
let timerInterval;
let incomeTicker = 60;
let date = new Date();

CurrentYear.forEach((year) => {
  year.innerHTML = date.getFullYear();
});

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    SetPosition(i);
    clearInterval(pageLoopInterval);
    clearInterval(timerInterval);
    if (nextSlide) {
      nextSlide.hidden = true;
    }
  });
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

pageLoopInterval = setInterval(() => {
  NextPosition();
}, 60000);

timerInterval = setInterval(() => {
  if (incomeTicker > 0) incomeTicker--;
  document.getElementById("incomeTicker").innerHTML =
    "Next slide: " + incomeTicker + " seconds";
  if (incomeTicker <= 0) incomeTicker = 60;
}, 1000);
