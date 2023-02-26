import { configMomentum, saveConfig } from "./config";
import { setName } from "./name";

import { showQuotes } from "./quotes";

const bel = document.querySelector("#be");
const rus = document.querySelector("#ru");
const eng = document.querySelector("#en");
const resetname = document.querySelector("#resetname");

bel.addEventListener("click", () => {
  console.log("Bel");
  configMomentum.lang = "be";
  saveConfig();
  showQuotes(configMomentum.lang);
  bel.classList.add("active_set");
  eng.classList.remove("active_set");
  rus.classList.remove("active_set");
});

rus.addEventListener("click", () => {
  console.log("Rus");
  configMomentum.lang = "ru";
  saveConfig();
  showQuotes(configMomentum.lang);
  rus.classList.add("active_set");
  eng.classList.remove("active_set");
  bel.classList.remove("active_set");
});

eng.addEventListener("click", () => {
  console.log("Eng");
  configMomentum.lang = "en";
  saveConfig();
  showQuotes(configMomentum.lang);
  eng.classList.add("active_set");
  bel.classList.remove("active_set");
  rus.classList.remove("active_set");
});

resetname.addEventListener("click", () => {
  configMomentum.nameUser = "";
  saveConfig();
  setName();
});
