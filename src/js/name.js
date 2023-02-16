import { configMomentum } from "./config";
const inputNamePage = document.querySelector("#nameinput");
function setName() {
  const namePage = document.querySelector("#nameuser");

  if (!configMomentum.nameUser) {
    // namePage.innerText = "Unknown";
  } else {
    namePage.innerText = configMomentum.nameUser;
    inputNamePage.classList.add("hidden");
  }
}

inputNamePage.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    // console.log(nameInput.value);
    configMomentum.nameUser = inputNamePage.value;
    setName();
  }
});
