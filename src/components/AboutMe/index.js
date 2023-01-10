import React from "react";

import ProfileImgURL from '../../assets/igor.png';


import {
  ContainerAbout,
  ContainerAboutBottom,
  CardImgProfile,
  ImgProfile
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
          <p>
            Estou aberto para novas oportunidades profissionais.
          </p>
        </div>

        <CardImgProfile>
          <ImgProfile src={ProfileImgURL} alt="Igor" />
        </CardImgProfile>

      </ContainerAboutBottom>

      <span id="Skills"></span>
    </ContainerAbout>
  );
}