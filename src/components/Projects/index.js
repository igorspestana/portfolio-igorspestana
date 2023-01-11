import React from "react";

import { projectsFiles } from "../../Services/projects";
/* import { Button } from "../Button/styles"; */

import {
  CardProjects,
  ContainerTopCard,
  TechsProject,
  /* ContainerBottomCard, */
} from "./style";

export function Projects() {

  return (
    <>
      {projectsFiles.map((project, index) =>
        <CardProjects key={index}>

          <h3>{project.name}</h3>

          <TechsProject>{project.techs}</TechsProject>

          <a href={project.deploy} >
            <ContainerTopCard>
              <img src={project.img} alt="Project" />
            </ContainerTopCard>
          </a>
          {/*  <ContainerBottomCard>
            <a href={project.repo} ><Button>Repository</Button></a>
          </ContainerBottomCard> */}

        </CardProjects>
      )}
    </>
  );
}