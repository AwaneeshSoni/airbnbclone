import React from "react"
import "../index.css"
import logo from "../img/logo.png"

function Header() {
    return (
        <div>
            <nav  className="nav">
                <img src={logo} alt="img"  className="img-logo"  />
            </nav>
        </div>
    );
}

export default Header