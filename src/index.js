import "./scss/main.scss";
import { configMomentum } from "./js/config";
import { clockMomentum } from "./js/clock";
import { setBg } from "./js/setbg";
import { showQuotes } from "./js/quotes";
import "./js/slider";
import "./js/name";

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
