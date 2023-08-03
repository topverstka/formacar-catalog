// import {debounce} from "../b_helpers/condition-helpers.js"
import Cookies from 'js-cookie';

window.addEventListener('DOMContentLoaded', (event) => {

    window.b_cookies = Cookies;
    function notificationOfCookie(showTime, removeTime) {
        const acceptCookie = Cookies.get('cookies_allow');

        const modalCookies = document.querySelector('#modal-cookies').closest('.b_modal__overlay')
        if (acceptCookie != undefined || acceptCookie == false) {
            if (modalCookies) modalCookies.remove();
            return;
        }

        setTimeout(() => {
            window.b_modal.openPop('modal-cookies');
        }, showTime)

        const allowCookieButton = modalCookies.querySelector('.modal-cookies__button-allow');
        allowCookieButton.addEventListener('click', () => {
            Cookies.set('cookies_allow', "true")

            setTimeout(() => {
                if (modalCookies) modalCookies.remove();
            }, removeTime)
        })


    }
    notificationOfCookie(0, 400);
});

