import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const styles = {
  imgContainer: {
    height: "75%",
    overflow: "hidden",
    textAlign: "center",
    borderRadius: 10,
    backgroundColor: "#ffffff",
  },
  img: {
    width: "100%",
    padding: 10,
    marginBottom: 20,
  },
};
// Individual Cards
function ProjectCards(props) {
  return (
    <div className="card m-3 border-dark" style={styles.imgContainer}>
      <div>
        <img style={styles.img} alt={props.name} src={props.image} />
      </div>
      <div className="content" style={{ fontSize: 20, color: "darkblue" }}>
        <p className="card-title">{props.name}</p>
        <p>
          <a href={props.github}>
            <img
              src="https://img.icons8.com/fluent/48/000000/github.png"
              alt="GitHub Repo"
            />
          </a>
          <a href={props.deploy}>
            <img
              src="https://img.icons8.com/fluent/48/000000/web.png"
              alt="Deploy Link"
            />
          </a>
        </p>
        <p>Tools: {props.topics}</p>
      </div>
      <br />
      <br />
    </div>
  );
}

export default ProjectCards;
