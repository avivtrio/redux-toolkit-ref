import React from "react";

const Header = () => {
  return (
    <div className="w-100 d-flex justify-content-between p-2 border">
      <div className="compony-name"> Organization Name</div>
      <div className="wrapper-pages d-flex justify-content-around">
        <a href="/">Tree</a>
        <span>|</span>
        <a href="/">Ecgs</a>
      </div>
      <div className="login">login/logout</div>
    </div>
  );
};

export default Header;
