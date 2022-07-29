import React from "react";


export default function Footer () {

    return (
        <footer className="footer" id="contact">
        <a href="mailto:danebraaksma@gmail.com" className="footer__link"><span><i className="fa fa-envelope"
                    aria-hidden="true"></i></span>danebraaksma@gmail.com</a>
        <p className="footer__link"><span><i className="fa fa-phone" aria-hidden="true"></i></span><a
                href="tel:502-931-2234">502-931-2234</a></p>

        <ul className="social-list">
            <li className="social-list__item">
                <a className="social-list__link" href="https://linkedin.com/in/danielbraaksma/" target="_blank">
                    <i className="fab fa-linkedin"></i>
                </a>
            </li>
            <li className="social-list__item">
                <a className="social-list__link" href="https://github.com/DanielBraaksma" target="_blank">
                    <i className="fab fa-github"></i>
                </a>
            </li>
        </ul>
    </footer>
    )
}
