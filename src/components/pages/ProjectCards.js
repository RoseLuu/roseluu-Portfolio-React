import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const styles = {
  img: {
    height: "75%",
    with: "100%",
    padding: 25,
    marginBottom: 20,
    overflow: "hidden",
    textAlign: "center",
    borderRadius: 10,
    backgroundColor: "#ffffff",
  },
};
// Individual Cards
function ProjectCards(props) {
  return (
    <div className="card">
      <div style={styles.img}>
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
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
        <p>({props.topics})</p>
      </div>
    </div>
  );
}

export default ProjectCards;
