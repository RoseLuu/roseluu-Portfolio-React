import React from "react";

function Footer() {
  return (
    <footer className="footer bg-dark fixed-bottom">
      <a href="https://github.com/RoseLuu">
        <img
          src="https://img.icons8.com/color/48/000000/github--v1.png"
          alt="Github"
          className="icon"
        />
      </a>
      <a href="https://www.linkedin.com/in/rose-luu-b1445a21a/">
        <img
          src="https://img.icons8.com/fluent/48/000000/linkedin.png"
          alt="LinkedIn"
          className="icon"
        />
      </a>
      <a href="mailto:luuhongnhung10@gmail.com">
        <img src="./img/icons8-gmail-48.png" alt="Gmail" className="icon" />
      </a>
    </footer>
  );
}

export default Footer;
