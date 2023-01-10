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
            Sou graduando em Análise e Desenvolvimento de Sistemas com conhecimentos de desenvolvimento web, infraestrutura e segurança cibernética. Utilizo como stack de desenvolvimento HTML, CSS, JavaScript, React e Node.js. Participei do Programa CiberEducação Cisco Brasil, onde tive a oportunidade de realizar as formações CCNA, CyberOps Associate e Network Security pela Cisco Networking Academy e pelo SENAI/SC. Com essa vivência eu aprendi sobre redes, SIEM, Firewall, hardening, gerenciamento de logs e gestão de incidentes. Gosto de me aventurar com novas tecnologias, aprender novas funcionalidades e me manter constantemente atualizado.
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