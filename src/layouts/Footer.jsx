import React from "react";
import "./Footer.scss";
function Footer() {
  return (
    <footer className="footer flex">
      <div className="footer-logo-container flex">
        <img className="footer-logo" src="../logo-footer.png" alt="logo kasa blanc"  />
      </div>
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;