/**
 *
 * Custom Popups 2.0.0
 * Открытие модальных окон
 *
 * Copyright 2025 Mihail Pridannikov
 *
 * Released on: 2025
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
                this.disableScrolling();
                this.openPopup(document.querySelector(`.popup-${id}`));
            });
        });
        POPUPS.forEach(popup => {
            popup.querySelector('.popup__overlay') ? popup.querySelector('.popup__overlay').addEventListener('click', e => this.handlerOnClickOverlay(e, popup)) : null;
            popup.querySelector('.popup__close') ? popup.querySelector('.popup__close').addEventListener('click', e => this.handlerOnClickButtonClose(e, popup)) : null;
        });
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

    this.init();
}