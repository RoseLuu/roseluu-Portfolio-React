import React from "react";
import skills from "../skill.json";

import resumePDF from "../resume.pdf";
const styles = {
  text: {
    fontSize: 30,
    textDecoration: "none",
  },
};
export default function Resume() {
  return (
    <div style={styles.text} className="m-3">
      <p>
        Visit my{" "}
        <a href={resumePDF} target="_blank">
          Resume
        </a>
      </p>
      <section>
        <h3>Skills Set</h3>
        <ul className="list-inline mx-auto skill-icon mt-3">
          {skills.map(function (skill, i) {
            return (
              <li className="list-inline-item mx-3" key={i}>
                <span>
                  <div className="text-center skills-tile">
                    <i className={skill.class} style={{ fontSize: "220%" }}>
                      <p
                        className="text-center"
                        style={{ fontSize: "30%", marginTop: "4px" }}
                      >
                        {skill.name}
                      </p>
                    </i>
                  </div>
                </span>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
