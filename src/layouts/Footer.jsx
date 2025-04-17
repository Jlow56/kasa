import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer flex">
      <div className="footer-logo-container flex">
        <img className="footer-logo" src="logo-footer.png" alt="logo kasa blanc"  />
      </div>
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;