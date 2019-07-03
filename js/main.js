var myMap;
// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init() {
  // Создание экземпляра карты и его привязка к контейнеру с
  // заданным id ("map").
  myMap = new ymaps.Map('map_canvas', {
    // При инициализации карты обязательно нужно указать
    // её центр и коэффициент масштабирования.
    center: [59.93863106417265, 30.3230545], // Москва
    zoom: 17,
    controls: ['zoomControl'],
  }, {
    searchControlProvider: 'yandex#search'
  });
  myMap.geoObjects
    .add(new ymaps.Placemark([59.93863106417265, 30.3230545], {
      balloonContent: 'цвет <strong>голубой</strong>',
      iconCaption: 'ул. Б. Конюшенная, д. 19/8'
    }, {
      preset: 'islands#dotIconWithCaption',
      iconCaptionMaxWidth: '200'
    }))

  var button = document.querySelector(".write-us-button");
  var popup = document.querySelector(".modal-contacts-popup");
  var close = popup.querySelector(".modal-close");
  var link = document.querySelector(".map-link");
  var mappopup = document.querySelector(".map-popup");
  var mapclose = document.querySelector(".map-close");
  var nameInput = popup.querySelector("[name=name]");
  var emailInput = popup.querySelector("[name=email]");
  var form = popup.querySelector(".modal-form");
  var submit = popup.querySelector(".popup-button");

  var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  });

button.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storage) {
    nameInput.value = storage;
    emailInput.focus();
  } else {
    nameInput.focus();
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  mappopup.classList.add("modal-show");
});

mapclose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mappopup.classList.remove("modal-show");
});

form.addEventListener("submit", function(evt) {
  if (!nameInput.value || !emailInput.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", nameInput.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
