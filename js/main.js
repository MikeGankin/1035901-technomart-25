var mappopup = document.querySelector(".map-popup");
var close = document.querySelector(".modal-close");
var button = document.querySelector(".write-us-button");
var popup = document.querySelector(".modal-contacts-popup");
var link = document.querySelector(".map-link");
var mapclose = document.querySelector(".map-close");
var isStorageSupport = true;
var storage = "";
var chartPopup = document.querySelector(".modal-shoping-chart-popup");
var priceButton = document.querySelector(".price-link");

if (mappopup) {
  var myMap;
  ymaps.ready(init);

function init() {
    myMap = new ymaps.Map('map_canvas', {
    center: [59.93863106417265, 30.3230545],
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
    }));
  }
  var nameInput = popup.querySelector("[name=name]");
  var emailInput = popup.querySelector("[name=email]");
  var form = popup.querySelector(".modal-form");
  var submit = popup.querySelector(".popup-button");

  try {
    storage = localStorage.getItem("nameInput");
  } catch (err) {
    isStorageSupport = false;
  }

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
}

if (chartPopup) {
  var continueButton = chartPopup.querySelector(".continue-button");

  priceButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    chartPopup.classList.add("modal-show");
  });

  close.addEventListener("click", function(evt) {
    evt.preventDefault();
    chartPopup.classList.remove("modal-show");
  });

  continueButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    chartPopup.classList.remove("modal-show");
  });
}
