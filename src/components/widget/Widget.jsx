import React from "react";
import "./widget.scss";

const Widget = () => {
  return (
    <div className="widget">
      <div className="left">
        <div className="title">User</div>
        <div className="counter">21312</div>
      </div>
      <div className="right">Right</div>
    </div>
  );
};

export default Widget;
