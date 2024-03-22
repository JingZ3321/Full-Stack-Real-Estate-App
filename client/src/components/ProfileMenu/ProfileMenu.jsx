import React, { useState } from 'react';
import { Avatar } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const ProfileMenu = ({ user, logout }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleMenuItemClick = (path) => {
        navigate(path, { replace: true });
        setIsOpen(false); // Close the menu after clicking a menu item
    };

    return (
        <div>
            {user && ( // Display avatar only if user is logged in
                <Avatar src={user.picture} alt="user image" radius="xl" onClick={toggleMenu} />
            )}

            {isOpen && user && ( // Display menu only if user is logged in and menu is open
                <div>
                    <ul>
                        <li onClick={() => handleMenuItemClick('./pages/Favorites/Favorites')}>
                            <span>Favourites</span>
                        </li>
                        <li onClick={() => handleMenuItemClick('./pages/Bookings/Bookings')}>
                            <span>Bookings</span>
                        </li>
                        <li onClick={() => {
                            localStorage.clear();
                            logout();
                        }}>
                            <span>Logout</span>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ProfileMenu;

