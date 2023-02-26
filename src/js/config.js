export let configMomentum = {
  lang: "be",
  clock: {
    timeFormat: "24",
  },
  nameUser: "",
};

export function saveConfig() {
  localStorage.setItem("cfgMomentum", JSON.stringify(configMomentum));
}
export function loadConfig() {
  const cfgMomentum = localStorage.getItem("cfgMomentum");
  if (!cfgMomentum) {
    console.log("no config");
  } else {
    // console.log(configMomentum);
    configMomentum = JSON.parse(cfgMomentum);
    console.log("load sett", configMomentum);
  }
}
