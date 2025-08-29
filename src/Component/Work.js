import React, { useState } from "react";
import "./Work.css";
import { project } from "./ProjectList";
import LastSec from "./LastSec";
import Fade from "react-reveal/Fade";


function Work() {
  const [projectdata, setprojectdata] = useState(project);

  return (
    <>
      <div className="container-fluid work-sec-div1">
        <div className="container">
          <h1 className="work-selected-text11"><Fade bottom cascade distance='65%'>selected works</Fade></h1>
          <div className="back-div1"></div>
          <p className="work-selected-text12">
            Here are a few examples of amazing projects.
          </p>
        </div>
        <div>
          {projectdata.map((data) => {
            return (
              <div className="container work-project-div11">
                <a href={data.link} target="_blank" className="work-project-href">
                  <img src={data.img} alt="" className="img-fluid proj-img11" />
                  <h1 className="work-project-title">{data.title}</h1>
                  <p className="work-project-date">{data.category}</p>
                </a>
                <hr className="work-projects-hr" />
              </div>
            );
          })}
        </div>
      </div>

      <LastSec></LastSec>
    </>
  );
}

export default Work;
