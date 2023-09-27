const popupToggleButton = document.getElementById("popupButton");
const linksContainerElement = document.getElementById("linksContainer");
const authorProfileElement = document.getElementById("authorProfile");
const popupMenuElement = document.getElementById("popupMenu");

popupToggleButton.addEventListener("click", (e) => {
  toggleBtn();
  toggleLinksContainer();
  toggleAuthorProfile();
  togglePopupMenu();
});

const toggleBtn = () => {
  if (popupToggleButton.classList.contains("btn__popup--active")) {
    popupToggleButton.classList.remove("btn__popup--active");
  } else {
    popupToggleButton.classList.add("btn__popup--active");
  }
};

const toggleLinksContainer = () => {
  if (
    linksContainerElement.classList.contains("article__linksContainer--active")
  ) {
    linksContainerElement.classList.remove("article__linksContainer--active");
  } else {
    linksContainerElement.classList.add("article__linksContainer--active");
  }
};

const toggleAuthorProfile = () => {
  if (authorProfileElement.classList.contains("article__authorProfile--hide")) {
    authorProfileElement.classList.remove("article__authorProfile--hide");
  } else {
    authorProfileElement.classList.add("article__authorProfile--hide");
  }
};
const togglePopupMenu = () => {
  if (popupMenuElement.classList.contains("popup__menu--hide")) {
    popupMenuElement.classList.remove("popup__menu--hide");
  } else {
    popupMenuElement.classList.add("popup__menu--hide");
  }
};
