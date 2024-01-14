import React from "react";
import { Link } from "react-router-dom";
import logo from "../Logo.png";

const Logo = () => {
    const logoContainerStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%", // Adjust the width as needed
      height: "100%", // Adjust the height as needed
    };
  
    const logoStyle = {
      width: "30%", // Adjust the width as needed
      height: "auto", // This will maintain the aspect ratio
    };
  
    return (
      <div style={logoContainerStyle}>
        <Link to="/">
          <img alt="Header Logo" src={logo} style={logoStyle} />
        </Link>
      </div>
    );
  };
  export default Logo;
