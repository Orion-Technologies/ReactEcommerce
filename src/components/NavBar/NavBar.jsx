import React from "react";
import "./navbar.css";
import {Link, NavLink} from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget.jsx";

const NavBar = () => {
    return (
        <header className="bg-dark">
            <Link className="linkStyle bigelow-rules-regular" to="/">
                <h1 className="display-1">Games & Music</h1>
            </Link>

            <nav>
                <ul>
                    <li>
                        <NavLink className="navlinkStyle bigelow-rules-regular display-5" to={"/categoria/1"}>Albumes</NavLink>
                    </li>
                    <li>
                        <NavLink className="navlinkStyle bigelow-rules-regular display-5" to={"/categoria/2"}>T-Shirts</NavLink>
                    </li>

                </ul>
            </nav>

            <CartWidget/>
        </header>
    );
}

export default NavBar;
