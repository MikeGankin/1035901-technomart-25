var button = document.querySelector(".write-us-button");
var popup = document.querySelector(".modal-contacts-popup");
var close = popup.querySelector(".modal-close");

button.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  name.focus()
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});
