import { UI_ELEMENTS, SEARCH } from "./UI.js";

const serverUrl = "http://api.openweathermap.org/data/2.5/weather";
const apiKey = "f660a2fb1e4bad108d6160b7f58c555f";

export async function getWeather(city) {
  const url = `${serverUrl}?q=${city}&appid=${apiKey}&units=metric`;
  const response = await fetch(url);
  const convertedResponse = await response.json();
  try {
    if (convertedResponse.message) {
      throw new Error(convertedResponse.message);
    }

    UI_ELEMENTS.cityNames.forEach(
      (item) => (item.textContent = convertedResponse.name)
    );
    UI_ELEMENTS.temperatures.forEach(
      (item) =>
        (item.textContent = `${Math.round(convertedResponse.main.temp)}°`)
    );
    UI_ELEMENTS.currentFeelslike.forEach((item) => {
      item.textContent = `${Math.round(convertedResponse.main.feels_like)}°`;
    });
    UI_ELEMENTS.currentWeather.textContent = convertedResponse.weather[0].main;
    UI_ELEMENTS.mainIcon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${convertedResponse.weather[0].icon}@4x.png`
    );
  } catch (err) {
    alert(convertedResponse.message);
  }
}

SEARCH.FORM.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const cityName = SEARCH.INPUT.value;
  getWeather(cityName);
  UI_ELEMENTS.addIcon.classList.remove("current-location__city-icon--active");
});
