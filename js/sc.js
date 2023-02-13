// const configM = require("./config.js");
// const { greetings } = require("./text.js");
// const textT = require("./text.js");
import { configMomentum } from "./config.js";
import { textT } from "./text.js";
// console.log(configM.clock.timeFormat);
//clock
function clockMomentum() {
  setInterval(() => {
    const dateNow = new Date();
    let day =
      textT.days[configMomentum.lang][dateNow.getDay()] +
      "," +
      dateNow.getDate() +
      " " +
      textT.months[configMomentum.lang][dateNow.getMonth()];
    let time = `${dateNow.getHours()}:${dateNow.getMinutes()}:${dateNow.getSeconds()}`;
    let greetingsData = "";
    if (dateNow.getHours() > 6 && dateNow.getHours() < 12) {
      greetings = textT.greetings[configMomentum.lang]["morning"];
    } else if (dateNow.getHours() > 12 && dateNow.getHours() < 18) {
      greetingsData = textT.greetings[configMomentum.lang]["afternoon"];
    } else if (
      dateNow.getHours() > 18 ||
      (dateNow.getHours() > 23 && dateNow.getMinutes() < 59)
    ) {
      greetingsData = textT.greetings[configMomentum.lang]["evening"];
    } else if (dateNow.getHours() > 0 && dateNow.getHours() < 6) {
      greetingsData = textT.greetings[configMomentum.lang]["night"];
    }
    console.log(day, time, greetingsData);
  }, 1000);
}
// clockMomentum();
const imageUrl =
  "https://raw.githubusercontent.com/yuuba/stage1-tasks/assets/images/afternoon/";
const body = document.querySelector("body");
function setBg() {
  const body = document.querySelector("body");
  const img = new Image();
  img.src = `${imageUrl}${Math.floor(Math.random() * 10) + 10}.jpg`;
  img.onload = () => {
    body.style.backgroundImage = `url(${img.src})`;
  };
}
body.addEventListener("click", () => {
  setBg();
});
