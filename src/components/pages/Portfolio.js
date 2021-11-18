import React from "react";
import ProjectCards from "./ProjectCards";
import portfolio from "../project.json";

const styles = {
  projectPic: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  wrapper: {
    paddingTop: 50,
    justifyContent: "space-around",
    height: "100%",
    display: "flex",
    overflow: "auto",
    flexFlow: "row wrap",
    padding: 10,
    alignContent: "flex-start",
  },
};
function Wrapper(props) {
  return (
    <div className="wrapper" style={styles.wrapper}>
      {props.children}
    </div>
  );
}

function Portfolio() {
  return (
    <section className="container">
      <div className="project">
        <h1 style={{ color: "darkblue" }}>Portfolio</h1>
        <hr></hr>
      </div>

      <Wrapper>
        {portfolio.map((project) => (
          <ProjectCards
            key={project.id}
            image={project.image}
            name={project.name}
            github={project.github}
            deploy={project.deploy}
            topics={project.topics}
          />
        ))}
      </Wrapper>
    </section>
  );
}

export default Portfolio;
