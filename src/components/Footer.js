import React from "react";

function Footer() {
  return (
    <footer className="footer bg-dark fixed-bottom">
      <div className="text-center">
        <a href="https://github.com/RoseLuu">
          <img
            src="https://img.icons8.com/color/48/000000/github--v1.png"
            alt="Github"
            className="btn-floating btn-lg"
          />
        </a>
        <a href="https://www.linkedin.com/in/rose-luu-b1445a21a/">
          <img
            src="https://img.icons8.com/fluent/48/000000/linkedin.png"
            alt="LinkedIn"
            className="btn-floating btn-lg"
          />
        </a>
        <a href="mailto:luuhongnhung10@gmail.com">
          <img
            src="https://img.icons8.com/fluent/48/000000/gmail.png"
            alt="Gmail"
            className="btn-floating btn-lg"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
