import React from 'react';
import "./footer.css";
import logo from "../logos/locus.png";
import logo1 from "../logos/locusPE.png";
import logo2 from "../logos/upe.png";


function Footer() {
  return (
    <footer>
      
      <img src={logo} alt="Locus" />
      <img src={logo1} alt="LocusPE" />
      
    </footer>
  );
}

export default Footer;
