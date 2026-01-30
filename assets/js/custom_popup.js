/**
 *
 * Custom Popups
 * Открытие модальных окон
 *
 * @author      Mihail Pridannikov
 * @copyright   2025-2026, Mihail Pridannikov
 * @license MIT
 * @version     1.0.0
 * @release     2025
 * @link        https://github.com/mihail-174/custom_popup
 *
 */

const CustomPopup = function(settings) {
    const BUTTON = document.querySelectorAll(settings.button);
    const POPUP = document.querySelector(settings.popup);

    this.init = function() {
        BUTTON.forEach(button => {
            button.addEventListener('click', e => {
                e.preventDefault();
                this.disableScrolling();
                POPUP.classList.add('is-opened');
            });
        });
        POPUP.querySelector('.popup__close').addEventListener('click', e => this.handlerOnClickButtonClose(e));
        POPUP.querySelector('.popup__overlay').addEventListener('click', e => this.handlerOnClickOverlay(e));
    }
    this.handlerOnClickButtonClose = function() {
        this.enableScrolling();
        POPUP.classList.remove('is-opened');
    }
    this.handlerOnClickOverlay = function(e) {
        this.enableScrolling();
        POPUP.classList.remove('is-opened');
    }
    this.disableScrolling = function(e) {
        document.body.classList.add('js-scroll-locked');
    }
    this.enableScrolling = function(e) {
        document.body.classList.remove('js-scroll-locked');
    }

    this.init();
}