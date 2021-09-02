// Get the DOM elements
'use strict'

// DOM elements to interect
const burgerIcon = document.querySelector('.header__burger');
const shorterBtn = document.querySelector('#shorten-btn');

// Event listener to show and hide the menu with burger icon
burgerIcon.addEventListener('click', () => {
    const menu = document.querySelector('.header__menu-container');
    menu.classList.toggle('header__menu-active');
});

// Listener to add the template with the shorten link
shorterBtn.addEventListener('click', getNewUrl);

function getNewUrl() {
    const inputUrl = document.querySelector('#input-url');
    const urlText = inputUrl.value;
    const errorLabel = document.querySelector('.form__error');
    
    if (isUrl(urlText)) {
        console.log('Valid URL');
        showTemplate(urlText, errorLabel)
    }
    else {
        console.log('Invalid URL');
        showError(errorLabel, inputUrl);
    }
}


function isUrl(url) {
    let validUrl;
    try {
        validUrl  = new URL(url);
    } catch (error) {
        return false;
    } 
    return validUrl.protocol === 'http:' || validUrl.protocol === 'https:';
}


function showTemplate(urlSring, errorElement) {
    errorElement.classList.remove('form__error-active');
    const sectionResult = document.querySelector('.results');
    const template = document.querySelector("template");
    const clon = template.content.cloneNode(true);
    const spanUrlPrev = clon.querySelector('#linkPrev');
    spanUrlPrev.textContent = urlSring;
    sectionResult.appendChild(clon);
}

function showError(errorElement, input) {
    errorElement.classList.add('form__error-active');
    input.value = '';
    input.focus();
    input.style.outline = '3px solid red'
}