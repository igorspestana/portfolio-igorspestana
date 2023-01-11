import React from "react";

import ProfileImgURL from '../../assets/igor.png';


import {
  ContainerAbout,
  ContainerAboutBottom,
} from "./styles";

export function AboutMe() {
  return (
    <ContainerAbout>
      <h1>
        About me
      </h1>

      <ContainerAboutBottom>
        <div>
          <p>
            Sou um desenvolvedor de software que ama resolver problemas. Aprendo rápido e sou capaz de adquirir e correlacionar habilidades com facilidade. Gosto de me aventurar com novas tecnologias, explorar novas funcionalidades e me manter constantemente atualizado.
          </p>
          <p>
            Atualmente estou me graduando em Análise e Desenvolvimento de Sistemas e aprofundando os meus estudos em desenvolvimento web e mobile.
          </p>
        </div>
        <div>
          <img src={ProfileImgURL} alt="Igor" />
        </div>
      </ContainerAboutBottom>

      <span id="Skills"></span>
    </ContainerAbout>
  );
}