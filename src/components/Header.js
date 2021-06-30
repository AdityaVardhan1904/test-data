import React from "react";
import { RiVirusFill } from "react-icons/ri";

const Header = () => {
  return (
    <div className="ui inverted segment header">
      <h1 className="ui center aligned header ui grey inverted header">
        <RiVirusFill /> Covid-19 Data
      </h1>
    </div>
  );
};

export default Header;
