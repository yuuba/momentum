import { configMomentum, saveConfig, loadConfig } from "./config";
const inputNamePage = document.querySelector("#nameinput");
const namePage = document.querySelector("#nameuser");
export function setName() {
  if (!configMomentum.nameUser) {
    inputNamePage.classList.remove("hidden");
    // inputNamePage.innerText = "";
  } else {
    namePage.innerText = configMomentum.nameUser;
    inputNamePage.classList.add("hidden");
    saveConfig();
  }
}

inputNamePage.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    // console.log(nameInput.value);
    configMomentum.nameUser = inputNamePage.value;
    setName();
  }
});
loadConfig();
if (configMomentum.nameUser) {
  namePage.innerText = configMomentum.nameUser;
  inputNamePage.classList.add("hidden");
}
