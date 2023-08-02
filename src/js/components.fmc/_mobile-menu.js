import { bodyLock, bodyUnlock } from "../utils/functions.js";

window.addEventListener('DOMContentLoaded', (event) => {
  const btnBurger = document.querySelector('.btn-burger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (!btnBurger && !mobileMenu) return;

  const BURGER_CLASSES = {
    btnBurgerActive: 'btn-burger-active',
    mobileMenuActive: 'mobile-menu-active',
  }

  btnBurger.addEventListener('click', () => {
    toggleBurger();
  });

  function openBurger() {
    const {btnBurgerActive, bodyFix, mobileMenuActive} = BURGER_CLASSES;
    btnBurger.classList.add(btnBurgerActive);
    bodyLock();
    mobileMenu.classList.add(mobileMenuActive);
  }

  function closeBurger() {
    const {btnBurgerActive, bodyFix, mobileMenuActive} = BURGER_CLASSES;
    btnBurger.classList.remove(btnBurgerActive);
    bodyUnlock();
    mobileMenu.classList.remove(mobileMenuActive);
  }

  function toggleBurger() {
    if (btnBurger.classList.contains(BURGER_CLASSES.btnBurgerActive)) {
      closeBurger();
    } else {
      openBurger();
    }
  }

  window.addEventListener('resize', () => {
    if (!btnBurger.classList.contains(BURGER_CLASSES.btnBurgerActive)) return;
    if (!mobileMenu.classList.contains(BURGER_CLASSES.mobileMenuActive)) return;

    if (window.innerWidth >= 1500) {
      closeBurger();
    }
  });
});