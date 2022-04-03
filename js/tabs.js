const tabsButtons = document.querySelectorAll(".tabs__button");
const tabsScreens = document.querySelectorAll(".current-location__screen");

tabsButtons.forEach((button) => {
  let currentTab = document.querySelector(
    `.${button.textContent.toLowerCase()}-tab`
  );
  function renderButtons() {
    tabsButtons.forEach((button) =>
      button.classList.remove("tabs__button--active")
    );
    button.classList.add("tabs__button--active");
  }

  function renderScreen() {
    tabsScreens.forEach((screen) => {
      screen.classList.remove("current-location__screen--active");
    });
    currentTab.classList.add("current-location__screen--active");
  }

  button.addEventListener("click", () => {
    renderButtons();
    renderScreen();
  });
});
