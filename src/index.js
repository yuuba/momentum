import "./scss/main.scss";
import { configMomentum } from "./js/config";
import { clockMomentum } from "./js/clock";
import { setBg } from "./js/setbg";
import { showQuotes } from "./js/quotes";

let numBg = 1;

setBg();
showQuotes(configMomentum.lang);
const clockPage = document.querySelector(".clock");
const dayPage = document.querySelector(".day");
const grPage = document.querySelector(".greetings");
setInterval(() => {
  let cl = clockMomentum();
  clockPage.innerText = cl.time;
  dayPage.innerText = cl.day;
  grPage.innerText = cl.greetings;
}, 1000);

const sliderLeft = document.querySelector(".slider_left");
const sliderRigth = document.querySelector(".slider_rigth");

sliderLeft.addEventListener("click", () => {
  if (numBg === 1) {
    numBg = 20;
  } else {
    numBg--;
  }
  setBg(numBg);
});
sliderRigth.addEventListener("click", () => {
  if (numBg === 20) {
    numBg = 1;
  } else {
    numBg++;
  }
  setBg(numBg);
});

const namePage = document.querySelector("#nameuser");
const inputNamePage = document.querySelector("#nameinput");

if (!configMomentum.nameUser) {
  // namePage.innerText = "Unknown";
} else {
  namePage.innerText = configMomentum.nameUser;
  inputNamePage.classList.add("hidden");
}

// !configMomentum.nameUser ? (namePage.innerText = "Unknown") : (namePage.innerText = configMomentum.nameUser);

// updatePage
// setInterval(() => {
//   // clockMomentum();
//   // setBg();
// }, 5000);

// clockMomentum();
//start page
// setBg();
