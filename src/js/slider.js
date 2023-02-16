import { setBg } from "./setbg";
const sliderLeft = document.querySelector(".slider_left");
const sliderRigth = document.querySelector(".slider_rigth");
let numBg = 1;
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
