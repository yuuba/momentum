import { whichTime } from "./clock";
// set backgroundImage
export function setBg(numImage) {
  const imageUrl = `https://raw.githubusercontent.com/yuuba/stage1-tasks/assets/images/`;
  const body = document.querySelector("body");
  console.log("download image");
  const img = new Image();
  if (numImage > 0 && numImage < 10) {
    img.src = `${imageUrl}${whichTime()}/0${numImage}.jpg`;
  } else if (numImage > 9 && numImage < 21) {
    img.src = `${imageUrl}${whichTime()}/${numImage}.jpg`;
  } else {
    img.src = `${imageUrl}${whichTime()}/${
      Math.floor(Math.random() * 10) + 10
    }.jpg`;
  }
  img.onload = () => {
    body.style.backgroundImage = `url(${img.src})`;
  };
}
