import React from 'react'
import "./Header.css"
import logo from "../../assets/images/netflix-logo.png"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

function Header() {
  return (

      <div className='header-outer-container'>
        <div className='header-container'>
            <div className='header-left'>
                <ul>
                    <li><img src={logo} width={130} /></li>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>Latest</li>
                    <li>MyList</li>
                    <li>Browser by Language</li>
                </ul>
            </div>
            <div className="header-right">
                <ul>
                    <li><SearchIcon /></li>
                    <li><NotificationsNoneIcon /></li>
                    <li><AccountBoxOutlinedIcon /></li>
                    <li><ArrowDropDownOutlinedIcon /></li>
                </ul>
            </div>
        </div>
      </div>
  )
}

export default Header
