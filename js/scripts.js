'use strict';

events();

function events () {
    // create instance of UI constructor
    let ui = new UI();

    document.querySelector('.header__button').addEventListener('click', ui.showMenu);
}

function UI () {

    this.showMenu = function (event) {
        event.preventDefault();
        document.querySelector('.nav').classList.toggle('nav--show');
    }
}