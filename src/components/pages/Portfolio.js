import React from "react";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Portfolio</h1>
          <div>
            <div id="card-1" className="">
              <span id="placement">
                <h4>Musical Time Machine</h4>
                <p class=" lower-text">HTML/CSS/JavaScript/API</p>
              </span>
            </div>
            <div id="card-2" class="card">
              <span id="small-explain">
                <h4>OOP-Team Profile Generator</h4>
                <p class="lower-text">
                  Back-end: Test with Jest/Node.js/Inquirer/Bootstrap
                </p>
              </span>
            </div>
            <div id="card-3" class="card">
              <span id="small-explain">
                <h4>Code Quiz</h4>
                <p class="lower-text">CSS/HTML/JavaScript </p>
              </span>
            </div>
            <div id="card-4" class="card">
              <span id="small-explain">
                <h4>Homeschool Hookup</h4>
                <p class="lower-text">Node.js/Express/Sequelize/MySQL2</p>
              </span>
            </div>
            <div id="card-5" class="card">
              <span id="small-explain">
                <h4>Node Taker</h4>
                <p class="lower-text">Node.js/Express/UUID</p>
              </span>
            </div>
            <div id="card-6" class="card">
              <span id="small-explain">
                <h4>Day Scheduler</h4>
                <p class="lower-text">HTML/CSS/LocalStorage</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
