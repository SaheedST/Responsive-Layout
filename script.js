"use strict";

const mobile_menu = document.querySelector(".hamburger__container");
const nav = document.querySelector(".nav");

mobile_menu.addEventListener("click", () => {
  nav.classList.toggle("nav__visible");
});
