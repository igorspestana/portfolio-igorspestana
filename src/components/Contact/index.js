import React from "react";

import LogoLinkedinImgURL from '../../icons/linkedin.png';
import LogoLinkedinDarkImgURL from '../../icons/linkedin-dark.png';
import LogoLinkedinsecondaryImgURL from '../../icons/linkedin-secondary.png';

import LogoWhatsappImgURL from '../../icons/whatsapp.png';
import LogoWhatsappDarkImgURL from '../../icons/whatsapp-dark.png';
import LogoWhatsappSecondaryImgURL from '../../icons/whatsapp-secondary.png';

import EmailImgURL from '../../icons/mail.png';
import EmailDarkImgURL from '../../icons/mail-dark.png';
import EmailImgsecondaryURL from '../../icons/mail-secondary.png';

import { ImgToggleColor } from '../ImgToggleColor/index.js'

import { Container, ContainerContactTop, ContainerContactBottom, CardContainerContactBottom } from "./styles";

export function Contact() {
  return (
    <Container>
      <ContainerContactTop>
        <h1>Get in touch</h1>
        <p>I'm seeking out opportunities to collaborate with companies, agencies and individuals.
        </p>
        <p>
          Interested in collaborating with me or just say hi?
        </p>
        <p>
          Feel free to reach out through any platforms bellow:
        </p>
      </ContainerContactTop>
      <ContainerContactBottom>
        <CardContainerContactBottom>
          <div>
            <ImgToggleColor
              link="mailto:igorspestana@gmail.com"
              imgWhite={EmailImgURL}
              imgDark={EmailDarkImgURL}
              imgHover={EmailImgsecondaryURL}
              alt="E-mail"
            />
          </div>
          <h4>E-mail</h4>
          <p>igorspestana@gmail.com</p>
        </CardContainerContactBottom>
        <CardContainerContactBottom>
          <div>

            <ImgToggleColor
              link="https://www.linkedin.com/in/igorspestana/"
              imgWhite={LogoLinkedinImgURL}
              imgDark={LogoLinkedinDarkImgURL}
              imgHover={LogoLinkedinsecondaryImgURL}
              alt="Logo LinkedIn"
            />
          </div>
          <h4>Linkedin</h4>
          <p>@igorspestana</p>
        </CardContainerContactBottom>
        <CardContainerContactBottom>
          <div>

            <ImgToggleColor
              link="https://api.whatsapp.com/send/?phone=5521976851146&text&type=phone_number&app_absent=0"
              imgWhite={LogoWhatsappImgURL}
              imgDark={LogoWhatsappDarkImgURL}
              imgHover={LogoWhatsappSecondaryImgURL}
              alt="Logo Whatsapp"
            />
          </div>
          <h4>Whatsapp</h4>
          <p>+55 21 976851146</p>
        </CardContainerContactBottom>
      </ContainerContactBottom>
    </Container>
  );
};
