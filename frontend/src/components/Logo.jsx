import React from "react";
import Picture from "../images/marvelogo.png";

const Logo = () => {
  return (
    <div class="logo-container">
      <img src={Picture} alt="Logo" class="logo" />
    </div>
  );
};

export default Logo;
