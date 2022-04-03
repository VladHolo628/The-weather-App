const UI_ELEMENTS = {
  cityNames: document.querySelectorAll(".city-name"),
  temperatures: document.querySelectorAll(".current-temperature"),
  currentFeelslike: document.querySelectorAll(".current-feelslike"),
  currentWeather: document.querySelector(".current-weather"),
  mainIcon: document.querySelector(".current-location__img"),
  locationsList: document.querySelector(".locations__list"),
  addedLocations: document.querySelectorAll(".locations__item-link"),
  addIcon: document.querySelector(".current-location__city-icon"),
};
const SEARCH = {
  FORM: document.querySelector(".app__search-form"),
  INPUT: document.querySelector(".app__search-input"),
};

export { UI_ELEMENTS, SEARCH };
