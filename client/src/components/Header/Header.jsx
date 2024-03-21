import React, { useState } from "react";
import './Header.css';
import { BiMenuAltRight } from 'react-icons/bi';

import useHeaderColor from '../../hooks/useHeaderColor';


import { getMenuStyles } from '../../utils/common';
import OutsideClickHandler from 'react-outside-click-handler';
import {Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const headerColor = useHeaderColor();
    const { loginWithRedirect } = useAuth0();
    

    // const getMenuStyles = (menuOpened) => {
    //     if (document.documentElement.clientWidth <= 800) {
    //         return { right: !menuOpened && "-100%" }
    //     }
    // };

    return (
        <section className="head-wrapper" style = {{background: headerColor}}>
            <div className="flexCenter paddings innerWidth head-container">
                
                {/* logo  */}
                <Link to = "/">
                    <img src="./logo.png" alt="logo" width={80} />
                </Link>

                {/* menu */}
                <OutsideClickHandler
                    onOutsideClick={() => {
                        setMenuOpened(false)
                    }}
                >
                    <div className="flexCenter head-menu"
                         style={getMenuStyles(menuOpened)}
                    >
                        <NavLink to="/properties">Properties</NavLink>

                        <a href="mailto:sc3321@gmail.com">Contact</a>
                        
                        {/* login button */}
                        <button className="button" onClick = {loginWithRedirect}>
                            Login
                        </button>
                    </div>
                </OutsideClickHandler>

                {/* for media amd small screens */}
                <div className="menu-icon"
                    onClick={() => setMenuOpened((prev) => !prev)}
                >
                    <BiMenuAltRight size={30} />
                </div>

            </div>
        </section>
        
    )
}

export default Header;