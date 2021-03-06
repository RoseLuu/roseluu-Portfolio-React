import React from "react";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavBars({ currentPage, handlePageChange }) {
  return (
    <div>
      <header expand="lg" bg="dark" sticky="top">
        <div className="nav bg-dark" to="/">
          <h1>
            <a
              href="#home"
              onClick={() => handlePageChange("Home")}
              // This is a conditional (ternary) operator that checks to see if the current page is "Home"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={
                currentPage === "Home" ? "nav-link active" : "nav-link"
              }
            >
              Rose Luu
            </a>
          </h1>
          <ul className="nav nav-tabs ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                style={{ marginTop: 15 }}
                href="#about"
                onClick={() => handlePageChange("About")}
                // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={
                  currentPage === "About" ? "nav-link active" : "nav-link"
                }
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                style={{ marginTop: 15 }}
                href="#portfolio"
                onClick={() => handlePageChange("Portfolio")}
                className={
                  currentPage === "Portfolio" ? "nav-link active" : "nav-link"
                }
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                style={{ marginTop: 15 }}
                href="#resume"
                onClick={() => handlePageChange("Resume")}
                className={
                  currentPage === "Resume" ? "nav-link active" : "nav-link"
                }
              >
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a
                style={{ marginTop: 15 }}
                href="#contact"
                onClick={() => handlePageChange("Contact")}
                // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={
                  currentPage === "Contact" ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default NavBars;
