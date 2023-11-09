import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
      {projects.map(projects => (
        <ProjectItem
          key={projects.id}
          id={projects.id}
          name={projects.name}
          description={projects.description} />
      ))}
    </div>
    </div>
  )
      }
  


export default ProjectList;
