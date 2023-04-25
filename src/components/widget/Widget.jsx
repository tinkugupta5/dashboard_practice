import React from "react";
import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const Widget = () => {
  return (
    <div className="widget">
      <div className="left">
        <div className="title">User</div>
        <div className="counter">21312</div>
        <div className="counter">See all user</div>
      </div>
      <div className="right">
        <div className="percentage">
          <KeyboardArrowUpIcon />
          24%
        </div>
        <PersonOutlineIcon className="icon" />
      </div>
    </div>
  );
};

export default Widget;
