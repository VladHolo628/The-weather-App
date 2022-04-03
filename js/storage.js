export let storage = {
  addedLocations: [],
  currentCity: "",
};

if (localStorage.getItem("currentCity")) {
  storage.currentCity = localStorage.getItem("currentCity");
} else {
  storage.currentCity = "Aktobe";
}

export function addLocation(location) {
  storage.addedLocations.push({
    name: location,
  });
  storage.currentCity = location;
}

export function removeLocation(location) {
  storage.addedLocations = storage.addedLocations.filter(
    (item) => item.name !== location
  );
}

export function updateStorage() {
  if(localStorage.getItem("favourite_cities") !== null && storage.addedLocations.length === 0) {
    storage.addedLocations = JSON.parse(localStorage.getItem("favourite_cities"));
  }
  localStorage.setItem(
    "favourite_cities",
    JSON.stringify(storage.addedLocations)
  );
  localStorage.setItem("currentCity", storage.currentCity);
}
updateStorage();
