"use strict";

import { removeAllClasses, bodyLock, bodyUnlock } from "./utils/functions.js";
import DismalModules, { acc, select } from "./utils/modules.js";

import "./unstable/formich.js";
// import Swiper, { Navigation, Autoplay, Pagination, Thumbs, EffectFade } from "swiper";
import "./unstable/burger.js";

/**
 * b_modal
 */
import "./b_modal.js";

/**
 * Lazy Load
 */
import "./libs/lazyload.min.js";
let lazyLoadInstance = new LazyLoad();
window.lazyload = lazyLoadInstance;

import { Fancybox, Thumbs, Toolbar} from "@fancyapps/ui";
Fancybox.bind("[data-fancybox]", {
  Thumbs: false,
  Toolbar: {
    display: {
      left: [],
      middle: [],
      right: ["close"],
    },
  },
  wheel: false,
  contentClick: false,
});


/**
 * Dropdown Select
 */
import "./libs/custom-select.min.js";
if (document.querySelector(".input--dropdown")) {
  customSelect(".input--dropdown .input__select");
}
import "./unstable/tabs.js";

/**
 * Smooth anchors
 */
import "./utils/smooth-anchors.js";

import "./components/carousels.js";
import { doc } from "prettier";

// Аккордеон
// const accordions = new DismalModules.Accordions()

//Модальные окна
const modals = new DismalModules.Modals()

import "./components.b/_cookies.js";

import "./components.fmc/_mobile-menu.js";

import "./sections.fmc/_events.js";
  
// Табы
// DismalModules.tabs()

// Плейсхолдер текстовых полей
// DismalModules.labelTextfield()

// Списки выбора
// DismalModules.select()

// Кнопка "Наверх"
// DismalModules.arrowUp()

// Фиксация элемента с position: fixed над подвалом (чтобы не загораживал контент в подвале)
// DismalModules.fixElemOverFooter()

// Только цифры и точка в инпутах
// DismalModules.onlyDigit()



window.addEventListener("DOMContentLoaded", (event) => {

  let modalShareButton = document.querySelector('.modal-share__button')
  modalShareButton.addEventListener("click", function () {
    let link = document.querySelector('.modal-share__input').value
    navigator.clipboard.writeText(link);
  })

  if (document.querySelector('.card-expand')) {

    let expandBtn = document.querySelector('.card-expand')
    expandBtn.addEventListener("click", function () {
      document.querySelector('.card-list').classList.toggle('hidden');
      expandBtn.classList.toggle('hide');
      let expandBtnText = expandBtn.querySelector('p');
      if (expandBtnText.innerHTML === "Развернуть") {
        expandBtnText.innerHTML = "Свернуть";
      } else {
        expandBtnText.innerHTML = "Развернуть";
      }
    });
  }

  // FAQ event

  const faqItems = document.querySelectorAll('.faq-item__title');

  for (let faqItem of faqItems) {
    faqItem.onclick = function () {
      this.closest('.faq-item').classList.toggle('faq-item-active');
    }
  }

  // DropDown Mobile menu

  const mobileMenuDropdown = document.querySelector('.mobile-menu__nav-dropdown');

  mobileMenuDropdown.onclick = function () {
    this.closest('.mobile-menu__nav-dropdown').classList.toggle('mobile-menu__nav-dropdown-active');
  }

  // Active filter item

  const filterItemBtns = document.querySelectorAll('.filters-block__main label');
  const filtersBlocks = document.querySelectorAll('.filters-block');

  for (let filterItemBtn of filterItemBtns) {
    filterItemBtn.addEventListener('click', function () {
      for (let filtersBlock of filtersBlocks) {
        filtersBlock.classList.remove('filter-block-child');
      }
    });
  }

  // Active modal-maps-item

  const modalMapsItems = document.querySelectorAll('.modal-maps__item');

  for (let modalMapsItem of modalMapsItems) {
    modalMapsItem.addEventListener('click', function () {

      for (let modalMapsItem of modalMapsItems) {
        modalMapsItem.classList.remove('modal-maps__item-active');
      }
      this.classList.add('modal-maps__item-active');
    });
  }

  // Active lang block

  const langBtns = document.querySelectorAll('.lang-event');
  const langMenu = document.querySelector('.lang-menu');
  const langMenuClose = document.querySelector('.lang-menu__close');
  const bgcFix = document.querySelector('.bgc-fix');

  bgcFix.addEventListener('click', function () {
    langMenu.classList.remove('lang-menu-active');
    document.body.classList.remove('lang-menu-fix');
    bgcFix.classList.remove('bgc-fix-active');
  });

  for (let langBtn of langBtns) {
    langBtn.addEventListener('click', function () {
      langMenu.classList.add('lang-menu-active');
      document.body.classList.add('lang-menu-fix');
      bgcFix.classList.add('bgc-fix-active');
    });
  }

  langMenuClose.addEventListener('click', function () {
    langMenu.classList.remove('lang-menu-active');
    document.body.classList.remove('lang-menu-fix');
    bgcFix.classList.remove('bgc-fix-active');
  });


  // Tag active

  const tagBtns = document.querySelectorAll('.tag');

  for (let tagBtn of tagBtns) {
    tagBtn.addEventListener('click', function () {
      this.classList.toggle('tag-active');
    });
  }

  // Search dropdown

  const headerSearchEvent = document.querySelector('.header-search__input');
  const searchDropdown = document.querySelector('.search-dropdown');

  headerSearchEvent.oninput = function () {
    if (headerSearchEvent.value.length > 2) {
      searchDropdown.style.display = 'block';
    } else {
      searchDropdown.style.display = 'none';
    }
  };

  // DropDown  news menu page.news

  const btnNewsDropDown = document.querySelector('.news-navigation__link_last');

  if (btnNewsDropDown) {
    btnNewsDropDown.addEventListener('click', function () {
      btnNewsDropDown.closest('.news-navigation').classList.toggle('news-navigation-active');
    });
  }

  // Menu list edit news

  const btnNewsMenuBar = document.querySelector('.news-menu__item svg');

  if (btnNewsMenuBar) {
    btnNewsMenuBar.addEventListener('click', function () {
      this.classList.toggle('news-menu__item-arrow');
      this.closest('.news-menu__item').classList.toggle('news-menu__active');
    });
  }

  // Modal select

  const modalSelectInputClick = document.querySelector('.form-feedback__select .form-feedback__input');
  const modalSelectList = document.querySelector('.form-feedback__select-list');
  const btnSelectOptions = document.querySelectorAll('input[type="checkbox"]');

  if (modalSelectInputClick) {
    modalSelectInputClick.addEventListener('click', function (e) {
      e.stopPropagation();

      modalSelectList.classList.toggle('form-feedback__select-list-active');
    });
  }

  document.addEventListener('click', e => {
    let target = e.target;
    let its_menu = target == modalSelectList || modalSelectList.contains(target);
    let its_hamburger = target == modalSelectInputClick;
    let menu_is_active = modalSelectList.classList.contains('form-feedback__select-list-active');

    if (!its_menu && !its_hamburger && menu_is_active) {
      modalSelectList.classList.toggle('form-feedback__select-list-active');
    }
  })

  for (let btnSelectOption of btnSelectOptions) {
    btnSelectOption.addEventListener('change', function () {

      let selectoptionData = this.getAttribute('name');
      let SelectInputValue = modalSelectInputClick.value;

      if (this.checked) {
        modalSelectInputClick.value += ((SelectInputValue) ? ', ' : '') + selectoptionData;
      } else {

        let a = modalSelectInputClick.value;
        let rExp1 = new RegExp(selectoptionData, "g");
        let rExp2 = new RegExp(selectoptionData + ', ', "g");
        let rExp3 = new RegExp(', ' + selectoptionData, "g");
        let c = modalSelectInputClick.value = a.replace(rExp3, '');
        let d = modalSelectInputClick.value = c.replace(rExp2, '');
        let b = modalSelectInputClick.value = d.replace(rExp1, '');
      }

      let selectInputValue = document.querySelector('.form-feedback__select .form-feedback__input')

      if (selectInputValue.value.length!= 0) {
        this.closest('.form-feedback__select').classList.add('form-feedback__select-active');
      } else {
        this.closest('.form-feedback__select').classList.remove('form-feedback__select-active');
      }

    });
  }

  // Add Modal FAQ item

  const faqItemNames = document.querySelectorAll('.faq-item__event');
  const formTitle = document.querySelector('.faq-item-title-name');
  const modalEvent = document.querySelector('.modal__event-wr');

  for (let faqItemName of faqItemNames) {

    if (faqItemName) {
      faqItemName.addEventListener('click', function () {
        let faqName = faqItemName.dataset.faqName;
        formTitle.textContent = faqName;

        let faqItemHTML = faqItemName.innerHTML;
        modalEvent.innerHTML = faqItemHTML;
      });
    }
  }
});