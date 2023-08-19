const carsButtons = document.querySelectorAll(".cars__list-btn");
const carItems = document.querySelectorAll(".cars__content-item");

const menuBTN = document.querySelector(".nav__toggle");
const menu = document.querySelector(".menu");
const menuIcon = document.querySelector(".menu-icon");

carsButtons.forEach((el) => {
  el.addEventListener("click", showCars);
});

function showCars(e) {
  const btnCarsTarget = e.currentTarget;
  const button = btnCarsTarget.dataset.button;

  carsButtons.forEach((item) => {
    item.classList.remove("cars__list-btn--active");
  });

  btnCarsTarget.classList.add("cars__list-btn--active");

  carItems.forEach((item) => {
    item.classList.remove("cars__content-item--active");
  });

  document
    .querySelector(`#${button}`)
    .classList.add("cars__content-item--active");
}

menuBTN.onclick = function () {
  menu.classList.toggle("menu--mobile");
  menuIcon.classList.toggle("menu-icon--active");
  document.body.classList.toggle("no-scroll");
};

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 5000,
  },
});
