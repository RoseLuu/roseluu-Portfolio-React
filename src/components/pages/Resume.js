import React from "react";

import resumePDF from "../resume.pdf";
const styles = {
  text: {
    fontSize: 40,
    textDecoration: "none",
  },
};
export default function Resume() {
  return (
    <div style={styles.text} className="text-center m-5">
      <p>
        {" "}
        Visit my{" "}
        <a href={resumePDF} target="_blank">
          Resume
        </a>
      </p>
    </div>
  );
}
