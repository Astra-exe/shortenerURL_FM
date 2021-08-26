// Get the DOM elements
'use strict'
const menu = document.querySelector('.header__menu-container');
const burgerIcon = document.querySelector('.header__burger');

// Event listener to show and hide the menu with burger icon
burgerIcon.addEventListener('click', () => {
    menu.classList.toggle('header__menu-active');
});