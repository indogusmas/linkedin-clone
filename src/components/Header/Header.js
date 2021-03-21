import React from 'react'
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SuperVisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import "./Header.css";
import HeaderOption from "./HeaderOption";

const Header = () => {
    return (
       <div className="header">
           <div className="header__left">
               <img
                 src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
                 alt="linkedin logo"
               />
               <div className="header__search">
                   <SearchIcon/>
                   <input type="text"/>
               </div>
           </div>
           <div className="header__right">
               <HeaderOption Icon={HomeIcon} title="Home"/>
               <HeaderOption Icon={SuperVisorAccountIcon} title="My Network"/>
               <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
               <HeaderOption Icon={ChatIcon}  title="Messaging"/>
               <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
               <HeaderOption avatar={true} title="Log Out" />
           </div>
       </div>
    )
}

export default Header
