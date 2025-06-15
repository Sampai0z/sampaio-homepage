import React from "react";
import "./WorkCard.css";

const WorkCard = (props) => {
  const sourceCode = () => {
    window.open(props.linkSite);
    console.log("click");
  };
  const siteCode = () => {
    window.open(props.linkGit);
    console.log("click");
  };

  return (
    <div className="col-md-6 pb-5">
      <div className="col-md-12">
        <div className="quadro">
          <img src={props.src} alt="teste" width={"90%"} />
        </div>
      </div>
      <div className="col-md-11">
        <h2 className="heading">{props.heading}</h2>
        <p className="description">{props.description}</p>
        <p>
          <b>Tech Stack</b>: {props.tech}
        </p>
        <div className="buttons">
          <button className="project_button" onClick={sourceCode}>
            Application deployment
          </button>
          <button className="project_button" onClick={siteCode}>
            Source code on Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
