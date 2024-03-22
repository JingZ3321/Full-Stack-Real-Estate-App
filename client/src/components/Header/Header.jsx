import React, { useState } from "react";
import './Header.css';
import { BiMenuAltRight } from 'react-icons/bi';
import useHeaderColor from '../../hooks/useHeaderColor';
import { getMenuStyles } from '../../utils/common';
import OutsideClickHandler from 'react-outside-click-handler';
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import { MantineProvider } from '@mantine/core';

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const headerColor = useHeaderColor();
    const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
    

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
                    <MantineProvider>
                        <div className="flexCenter head-menu"
                             style={getMenuStyles(menuOpened)}
                        >
                            <NavLink to="/properties">Properties</NavLink>
                            <a href="mailto:sc3321@gmail.com">Contact</a>
                            
                            {/* login button */}
                            {
                                !isAuthenticated ? (
                                    <button className="button" onClick={loginWithRedirect}>
                                        Login
                                    </button> 
                                ) : (
                                    <ProfileMenu user={user} logout={logout}/>
                                )
                            }
                        </div>
                    </MantineProvider>
                </OutsideClickHandler>

                {/* for media and small screens */}
                <div className="menu-icon"
                    onClick={() => setMenuOpened((prev) => !prev)}
                >
                    <BiMenuAltRight size={30} />
                </div>

            </div>
        </section>
    );
};

export default Header;
