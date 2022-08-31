import React from 'react'
import "./home.css";

const Social = () => {
  return (
    <div className="home__social">
        <a href="https://www.instagram.com/lbenjal/" className="home__social-icon" /*target={_blank}*/>
            <i class="uil uil-instagram"></i>
        </a>
        <a href="https://github.com/oxyvans" className="home__social-icon" /*target={_blank}*/>
            <i class="uil uil-github-alt"></i>
        </a>
        <a href="https://www.linkedin.com/in/benjam%C3%ADn-gutierrez-99717820a/" className="home__social-icon" /*target={_blank}*/>
            <i class="uil uil-linkedin-alt"></i>
        </a>
    </div>
  )
}

export default Social