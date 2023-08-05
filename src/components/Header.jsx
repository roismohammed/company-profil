import { Fragment, useState } from "react";
import './Header.css';

export default function Header() {
    const [header, setHeader] = useState(false);
    const [blackText, setBlackText] = useState(false);

    const stikyHeader = () => {
        if (window.scrollY >= 50) {
            setHeader(true);
        } else {
            setHeader(false);
        }
    };

    const stikyText = () => {
        if (window.scrollY >= 50) {
            setBlackText(true)
        } else {
            setBlackText(false)
        }
    }

    window.addEventListener('scroll', () => {
        stikyHeader();
        stikyText()
    });

    return (
        <Fragment>
            <nav className={header ? 'bg-header navbar navbar-expand-lg fixed-top p-3 shadow-sm' : 'navbar navbar-expand-lg fixed-top'}>
                <div className="container">
                    <a id="judul-header" className={blackText ? "navbar-brand judul-header" : "navbar-brand text-white judul-header"} href="#">
                        TusukSate
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto gap-3 ">
                            <li className="nav-item ">
                                <a className={blackText ? 'nav-link active' : "nav-link active text-white"} aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={blackText ? 'nav-link ' : "nav-link text-white"} aria-current="page" href="#about">
                                    About Me
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className={blackText ? 'nav-link ' : "nav-link  text-white"} aria-current="page" href="#services">
                                    Services
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className={blackText ? 'nav-link ' : "nav-link text-white"} aria-current="page" href="#contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
}
