import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import HeaderOption from './HeaderOption';

function Header() {
  return (
    <div className="header">
      <div className="header__left">

        <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />

        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption />
        <HeaderOption />
      </div>

    </div>
  );
}

export default Header;
