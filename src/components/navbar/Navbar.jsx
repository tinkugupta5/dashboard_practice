import React from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="search ..." /> <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon /> English
          </div>
          <div className="item">
            <DarkModeIcon /> English
          </div>
          <div className="item">
            <FullscreenExitIcon />
          </div>
          <div className="item">
            <NotificationsOffIcon />
          </div>
          <div className="item">
            <ChatBubbleOutlineIcon />
          </div>
          <div className="item">
            <ListOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
