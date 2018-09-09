var link = document.querySelector(".main-search");
var popup = document.querySelector(".appointment-form");
var form = document.querySelector("form");
var arrivalDate = document.querySelector(".date-arrival");
var departureDate = document.querySelector(".date-departure");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("form-show");
  arrivalDate.focus();
});

form.addEventListener("submit", function (evt) {
  if (!arrivalDate.value || !departureDate.value) {
    evt.preventDefault();
    popup.classList.remove("form-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("form-error");
    console.log("Необходимо выбрать дату заезда и дату выезда");
  }
});