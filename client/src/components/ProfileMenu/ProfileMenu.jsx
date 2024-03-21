import React from 'react';
import { Avatar, Menu, MenuDropdown, MenuItem } from '@mantine/core';

const ProfileMenu = ({user, logout}) => {
    return (
        <Menu>
            Profile
            {/* <Menu.Target>
                <Avatar src={user?.picture} alt='user image' radius={"xl"}/>
            </Menu.Target>
            <MenuDropdown>
                <MenuItem>
                    Favorites
                </MenuItem>

                <MenuItem>
                    Bookings
                </MenuItem>

                <Menu.Item onClick={() => {
                    localStorage.clear();
                    logout()
                }}>
                    Logout
                </Menu.Item>

            </MenuDropdown> */}
        </Menu>
    );
}

export default ProfileMenu;