import React from "react";


export default function Footer () {

    return (
        <footer class="footer" id="contact">
        <a href="mailto:danebraaksma@gmail.com" class="footer__link"><span><i class="fa fa-envelope"
                    aria-hidden="true"></i></span>danebraaksma@gmail.com</a>
        <p class="footer__link"><span><i class="fa fa-phone" aria-hidden="true"></i></span><a
                href="tel:502-931-2234">502-931-2234</a></p>

        <ul class="social-list">
            <li class="social-list__item">
                <a class="social-list__link" href="https://linkedin.com/in/danielbraaksma/" target="_blank">
                    <i class="fab fa-linkedin"></i>
                </a>
            </li>
            <li class="social-list__item">
                <a class="social-list__link" href="https://github.com/DanielBraaksma" target="_blank">
                    <i class="fab fa-github"></i>
                </a>
            </li>
        </ul>
    </footer>
    )
}
