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
      <h1 className="m-5">Hello! I am Rose</h1>
      <div>
        <img
          style={styles.avatar}
          className="border border-dark border-1"
          id="profile-pic"
          src={unnamed}
          alt="Rose Luu"
        />
        <p className="m-5">
          I have just started my journey to become a Web Developer. Even I am
          just at the entry-level of a web developer, I always like to challenge
          myself and work on unfamiliar projects. I have experience and been
          known for working well in both group and solo projects.
        </p>
      </div>
    </section>
  );
}
