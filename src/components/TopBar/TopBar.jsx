import React from 'react';
import './TopBar.css';

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export default function TopBar() {
  return (
    <div className='topBar'>
      <div className="topBarWrapper">
        <div className="topLeft">
          <span className="logo">Organization Admin</span>
        </div>
        <div className="topRight">
          <div className="topBarIconsContainer">
            <NotificationsNoneIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topBarIconsContainer">
            <LanguageIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topBarIconsContainer">
            <SettingsIcon />
          </div>
          <img src="https://actiserver.com/wp-content/uploads/avatar-1.png" alt="avatar-img" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}
