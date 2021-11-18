import React from "react";
import cover from "../img/rosepic-cover.jpg";
const styles = {
  coverPic: {
    width: "100%",
    height: 200,
    backgroundPosition: "center",
    backgroundSize: "cover",
    justifyContent: "flex-end",
    flexWrap: "wrap",
    alignItems: "flex-end",
  },
  text: {
    color: "darkblue",
    fontSize: 20,
  },
};
export default function Home() {
  return (
    <div>
      <img style={styles.coverPic} src={cover} alt="cover" />
      <div className="m-5">
        <h1 className="text-center" style={{ color: "darkblue" }}>
          Hello! Welcome to my zoo 🤩
        </h1>
        <br />
        <p className="text-center" style={styles.text}>
          I am Rose Luu, a passionate software engineer. 
          <br />
          <br />
          Thank you for visiting my website!
          <br />I hope you like it ❤️.
        </p>
      </div>
    </div>
  );
}
