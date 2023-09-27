const popupToggleButton = document.getElementById("popupButton");
const linksContainerElement = document.getElementById("linksContainer");
const authorProfileElement = document.getElementById("authorProfile");
const popupMenuElement = document.getElementById("popupMenu");

popupToggleButton.addEventListener("click", (e) => {
  popupToggleButton.classList.toggle("btn__popup--active");
  linksContainerElement.classList.toggle("article__linksContainer--active");
  authorProfileElement.classList.toggle("article__authorProfile--hide");
  popupMenuElement.classList.toggle("popup__menu--hide");
});
