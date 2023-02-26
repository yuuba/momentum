import "./scss/main.scss";
import { configMomentum, loadConfig, saveConfig } from "./js/config";
import { clockMomentum } from "./js/clock";
import { setBg } from "./js/setbg";
import { showQuotes } from "./js/quotes";
import "./js/slider";
import "./js/name";
import "./js/langch";

setBg();
loadConfig();
showQuotes(configMomentum.lang);

const clockPage = document.querySelector(".clock");
const dayPage = document.querySelector(".day");
const grPage = document.querySelector(".greetings");
setInterval(() => {
  let cl = clockMomentum();
  clockPage.innerText = cl.time;
  dayPage.innerText = cl.day;
  grPage.innerText = cl.greetings;
  // loadConfig();
}, 1000);
const nextquote = document.querySelector("#nextquote");
nextquote.addEventListener("click", ()=>{
  showQuotes(configMomentum.lang);
})