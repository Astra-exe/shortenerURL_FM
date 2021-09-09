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
shorterBtn.addEventListener('click', shortenUrl);

function shortenUrl() {
    // debugger
    const url = getNewUrl();
  
    if (url.isUrl()) {
        console.log('Valid URL');
        url.showTemplate();
    }
    else {
        console.log('Invalid URL');
        url.showError();
    }
}


function getNewUrl() {
    const inputUrl = document.querySelector('#input-url');
    const urlText = inputUrl.value;
    const errorLabel = document.querySelector('.form__error');
    
    
    return {
        isUrl: () => {
            let validUrl;
            try {   
                validUrl  = new URL(urlText);
            } catch (error) {
                return false;
            } 
            return validUrl.protocol === 'http:' || validUrl.protocol === 'https:';
        },

        showTemplate: function() {
            this.updateInput(1);
            const sectionResult = document.querySelector('.results');
            const template = document.querySelector("template");
            const clon = template.content.cloneNode(true);
            const spanUrlPrev = clon.querySelector('#linkPrev');
            spanUrlPrev.textContent = urlText;
            sectionResult.appendChild(clon);
        },

        showError: function() {
            this.updateInput(0);
        },

        updateInput: (flag) => {
            inputUrl.value = ''
            // if flag is 1 then the url is correct
            if (flag) {
                errorLabel.classList.remove('form__error-active');
                inputUrl.style.outline = 'initial'
            }
             // if flag is 0 then the url is incorrect
            else {
                errorLabel.classList.add('form__error-active');
                inputUrl.focus();
                inputUrl.style.outline = '3px solid red'
            }
        }

        
    }
}

