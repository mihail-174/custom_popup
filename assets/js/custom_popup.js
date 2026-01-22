/**
 *
 * Custom Popups 3.1.1
 * Открытие модальных окон
 *
 * Copyright 2025 Mihail Pridannikov
 *
 * Released on: February 27, 2025
 *
 */

const CustomPopup = function(settings) {
    const BUTTON = document.querySelectorAll('[data-modal-popup]');
    const POPUPS = document.querySelectorAll('.popup');

    this.init = function() {
        BUTTON.forEach(button => {
            button.addEventListener('click', e => {
                e.preventDefault();
                let id = button.getAttribute('data-modal-popup');
                // console.log(id);
                this.disableScrolling();

                if (id === 'agreement') {
                    let href = e.currentTarget.getAttribute('href');
                    var http = new XMLHttpRequest();
                    http.open('GET', href);
                    http.onreadystatechange = function () {
                        var doc = new DOMParser().parseFromString(this.responseText, "text/html");
                        if (doc.querySelector('.page__content')) {
                            console.log(doc.querySelector('.page__content'))
                            document.querySelector('.popup-agreement .popup__content-inner').innerHTML = doc.querySelector('.page__content').innerHTML;
                        }
                    }
                    http.send(null);
                }

                this.openPopup(document.querySelector(`.popup-${id}`));
            });
        });
        POPUPS.forEach(popup => {
            popup.querySelector('.popup__overlay') ? popup.querySelector('.popup__overlay').addEventListener('click', e => this.handlerOnClickOverlay(e, popup)) : null;
            popup.querySelector('.popup__close') ? popup.querySelector('.popup__close').addEventListener('click', e => this.handlerOnClickButtonClose(e, popup)) : null;
        });
        document.body.addEventListener('keydown', e => this.handlerOnClickEsc(e, POPUPS), {passive: true});
    }
    this.handlerOnClickButtonClose = function(e, popup) {
        this.enableScrolling();
        this.closePopup(popup);
    }
    this.handlerOnClickOverlay = function(e, popup) {
        this.enableScrolling();
        this.closePopup(popup);
    }
    this.disableScrolling = function(e) {
        document.body.classList.add('js-scroll-locked');
    }
    this.enableScrolling = function(e) {
        document.body.classList.remove('js-scroll-locked');
    }
    this.openPopup = function(popup) {
        popup.classList.add('is-opened');
    }
    this.closePopup = function(popup) {
        popup.classList.remove('is-opened');
    }
    this.handlerOnClickEsc = function(e, popups) {
        popups.forEach(popup => {
            e.keyCode === 27 && this.closePopup(popup);
        });
    }

    this.init();
}