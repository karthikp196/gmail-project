import React from 'react'
import "./Header.css";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" />
                

            </div>

            <div className="header_middle">
                <SearchIcon />
                <input type="text" placeholder="Search" />
                <ArrowDropDownIcon />

            </div>

            <div className="header_right">
                <IconButton>
                    <AppsIcon />
                </IconButton>

                <IconButton>
                    <NotificationsIcon />
                </IconButton>

                <IconButton>
                    <Avatar />
                </IconButton>
            
            </div>
        </div>
    )
}

export default Header
