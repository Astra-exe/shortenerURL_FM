// Get the DOM elements
'use strict'
const menu = document.querySelector('.header__menu-container');
const burgerIcon = document.querySelector('.header__burger');
const shorterBtn = document.querySelector('#shorten-btn');







// Event listener to show and hide the menu with burger icon
burgerIcon.addEventListener('click', () => {
    menu.classList.toggle('header__menu-active');
});

shorterBtn.addEventListener('click',  getNewResult);

function getNewResult() {
  const sectionResult = document.querySelector('.results');
  const template = document.querySelector("template");
  const clon = template.content.cloneNode(true);
  sectionResult.appendChild(clon);
}


// template
