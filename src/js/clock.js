import { textT } from "./text";
import { configMomentum } from "./config";

//day or night
export function whichTime() {
  const dateNow = new Date();
  if (dateNow.getHours() > 6 && dateNow.getHours() < 12) {
    return "morning";
  } else if (dateNow.getHours() > 12 && dateNow.getHours() < 18) {
    return "afternoon";
  } else if (
    dateNow.getHours() > 18 ||
    (dateNow.getHours() > 23 && dateNow.getMinutes() < 59)
  ) {
    return "evening";
  } else if (dateNow.getHours() > 0 && dateNow.getHours() < 6) {
    return "night";
  }
}

export function clockMomentum() {
  const dateNow = new Date();
  let result = {};
  let day =
    textT.days[configMomentum.lang][dateNow.getDay()] +
    "," +
    dateNow.getDate() +
    " " +
    textT.months[configMomentum.lang][dateNow.getMonth()];
  let time = `${dateNow.getHours()}:${dateNow.getMinutes()}:${dateNow.getSeconds()}`;
  let greetingsData = textT.greetings[configMomentum.lang][whichTime()];
  result.day = day;
  result.time = time;
  result.greetings = greetingsData;
  // console.log(day, time, greetingsData);
  console.log(result);
  return result;
}
