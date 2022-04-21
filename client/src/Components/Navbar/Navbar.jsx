import React from "react";
import { Link } from "react-router-dom";
// import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
// import "https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
// import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
// import "https://kit.fontawesome.com/74ac62b571.js"
// import "https://fonts.googleapis.com/css2?family=Comfortaa:wght@410&display=swap"

import "./Navbar.css"
import Logo from "./logo.png"


export default function Navbar() {
    return (
        <div>
            <div style={{ "marginBottom": "3%" }}>


                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link to="/" style={{textDecoration:"none"}} >
                            <div className="nav-link active" aria-current="page" href="#">
                                Home
                            </div>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#footer">Status</a>
                    </li>
                    <li className="nav-item">
                        <img src={Logo} alt="" style={{ "marginLeft": "3%", "marginRight": "3%" }} />

                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="storage" href="#">Queue</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="about" href="#footer">About us</a>
                    </li>
                </ul>
            </div>
        </div>



    );
}