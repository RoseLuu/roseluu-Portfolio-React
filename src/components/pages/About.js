import React from "react";
import unnamed from "../img/rose-pic.jpg";
const styles = {
  avatar: {
    verticalAlign: "middle",
    width: 150,
    height: 150,
    borderRadius: "40%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
};
export default function About() {
  return (
    <section className="container">
      <h1 style={{ color: "darkblue" }}>About Me</h1>
      <div>
        <img
          style={styles.avatar}
          className="border border-dark border-1"
          id="profile-pic"
          src={unnamed}
          alt="Rose Luu"
        />
        <p className="m-5" style={{ fontSize: 20, color: "darkblue" }}>
          I have just started my journey to become a Web Developer. I always
          like to challenge myself and work on unfamiliar projects. I have
          experience and been known for working well in both group and solo
          projects.
          <br />
          <br />I also have passion in music, fiction-movie and travel. My
          favorite movie of all time is Harry Potter. Contact me to talk about
          code or anything that you want to discuss.
          <br />
          <br />
          <p style={{ textAlign: "center" }}>From Rose with ❤️</p>
        </p>
      </div>
    </section>
  );
}
