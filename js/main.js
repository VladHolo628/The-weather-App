import "./tabs.js";
import "./fetch.js";
import { getWeather } from "./fetch.js";
import { UI_ELEMENTS } from "./UI.js";
import "./storage.js";
import {
  storage,
  addLocation,
  removeLocation,
  updateStorage,
} from "./storage.js";
renderLocations();
getWeather(storage.currentCity);
function renderLocations() {
  console.log(storage.addedLocations);
  UI_ELEMENTS.locationsList.innerHTML = "";
  // let data = JSON.parse(localStorage.getItem("favourite_cities"));
  storage.addedLocations.forEach((location) => {
    UI_ELEMENTS.locationsList.insertAdjacentHTML(
      "beforeend",
      `<li class="locations__item">
            <a href="#" class="locations__item-link">
              ${location.name}
            </a>
          </li>`
    );
  });
  UI_ELEMENTS.locationsList.childNodes.forEach((item) => {
    item.addEventListener("click", () => {
      getWeather(item.textContent);
      localStorage.setItem("currentCity", item.textContent);
    });
  });
}

UI_ELEMENTS.addIcon.addEventListener("click", () => {
  UI_ELEMENTS.addIcon.classList.toggle("current-location__city-icon--active");
  let currentName = UI_ELEMENTS.cityNames[0].textContent;
  let isAdded = storage.addedLocations.find(
    (city) => city.name === currentName
  );
  if (!isAdded) {
    addLocation(currentName);
    updateStorage();
  } else {
    removeLocation(currentName);
    updateStorage();
  }
  renderLocations();
});
