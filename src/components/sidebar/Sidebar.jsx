import React from "react";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Dashboard</span>
      </div>
      <hr />

      <div className="center">
        <ul>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
        </ul>
      </div>
      <div className="bottom">Color Option</div>
    </div>
  );
};

export default Sidebar;
