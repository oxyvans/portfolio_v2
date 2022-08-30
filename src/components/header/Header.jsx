import React from 'react';
import "./header.css";


const Header = () => {
  return (
    <header className='header'>
        <nav className="nav container">
            <a href="index.html" className="nav__logo">BG</a>

            <div className="nav__menu">
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="/" className="nav__link active-link">
                            <i class="uil uil-estate nav__icon"></i>Home
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="/" className="nav__link">
                            <i class="uil uil-user-circle nav__icon"></i>About
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="/" className="nav__link">
                            <i class="uil uil-file-check-alt nav__icon"></i>Skills
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="/" className="nav__link">
                            <i class="uil uil-bag-alt nav__icon"></i>Portfolio
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="/" className="nav__link">
                            <i class="uil uil-envelope-upload nav__icon"></i>Contact
                        </a>
                    </li>
                </ul>
                <i class="uil uil-times nav__close"></i>
            </div>
            <div className='nav__toggle'>
                <i class="uil uil-bars"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header