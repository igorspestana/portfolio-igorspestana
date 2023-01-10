import React, { useEffect, useState } from "react";

import { Button } from "../Button/styles";
import CV from '../../assets/igorpestana-cv.pdf';
import { ImgToggleColor } from '.././ImgToggleColor/index.js'

import {
  ContainerHome,
  ContainerHomeTop,
  ContainerHomeBottom,
  ContainerSocialMedia,
  WorksSection,
  TextAnimation,
} from "./styles";

import LogoLinkedinImgURL from '../../icons/linkedin.png';
import LogoLinkedinDarkImgURL from '../../icons/linkedin-dark.png';
import LogoLinkedinSecondaryImgURL from '../../icons/linkedin-secondary.png';

import LogoGitHubImgURL from '../../icons/github.png';
import LogoGitHubDarkImgURL from '../../icons/github-dark.png';
import LogoGitHubSecondaryImgURL from '../../icons/github-secondary.png';

import LogoMediumImgURL from '../../icons/medium.png';
import LogoMediumDarkImgURL from '../../icons/medium-dark.png';
import LogoMediumSecondaryImgURL from '../../icons/medium-secondary.png';

import LogoWhatsappImgURL from '../../icons/whatsapp.png';
import LogoWhatsappDarkImgURL from '../../icons/whatsapp-dark.png';
import LogoWhatsappSecondaryImgURL from '../../icons/whatsapp-secondary.png';

import LogoInstagramImgURL from '../../icons/instagram.png';
import LogoInstagramDarkImgURL from '../../icons/instagram-dark.png';
import LogoInstagramSecondaryImgURL from '../../icons/instagram-secondary.png';


export function FisrtContainer() {
  const [workAnimation, setWorkAnimation] = useState("I'm a Software Developer.");
  const [indexWorkCurrent, setIndexWorkCurrent] = useState(1);

  const works = [
    "I'm a Software Developer.",
    "I love solving problems.",
    "I'm curious.",
    "I love creating stuff.",
  ];

  useEffect(() => {
    setTimeout(() => {
      setIndexWorkCurrent(prev => prev + 1);

      if (indexWorkCurrent >= 4) {
        setIndexWorkCurrent(0);
      }

      setWorkAnimation(works[indexWorkCurrent]);
    }, 4000);
  }, [indexWorkCurrent]);

  return (
    <ContainerHome>
      <ContainerHomeTop>
        <div>
          <h1>Hi there!</h1>
          <h1>I'm Igor S. Pestana.</h1>
          <p>
            <WorksSection>
              <TextAnimation>{workAnimation}</TextAnimation>
            </WorksSection>
          </p>
        </div>
      </ContainerHomeTop>

      <ContainerHomeBottom>
        <ContainerSocialMedia>
          <ImgToggleColor
            link="https://github.com/igorspestana"
            imgWhite={LogoGitHubImgURL}
            imgDark={LogoGitHubDarkImgURL}
            imgHover={LogoGitHubSecondaryImgURL}
            alt="Logo GitHub"
          />
          <ImgToggleColor
            link="https://www.linkedin.com/in/igorspestana/"
            imgWhite={LogoLinkedinImgURL}
            imgDark={LogoLinkedinDarkImgURL}
            imgHover={LogoLinkedinSecondaryImgURL}
            alt="Logo LinkedIn"
          />
          <ImgToggleColor
            link="https://medium.com/@igorspestana"
            imgWhite={LogoMediumImgURL}
            imgDark={LogoMediumDarkImgURL}
            imgHover={LogoMediumSecondaryImgURL}
            alt="Logo Medium"
          />
          <ImgToggleColor
            link="https://api.whatsapp.com/send/?phone=5521976851146&text&type=phone_number&app_absent=0"
            imgWhite={LogoWhatsappImgURL}
            imgDark={LogoWhatsappDarkImgURL}
            imgHover={LogoWhatsappSecondaryImgURL}
            alt="Logo Whatsapp"
          />
          <ImgToggleColor
            link="https://www.instagram.com/igorspestana/"
            imgWhite={LogoInstagramImgURL}
            imgDark={LogoInstagramDarkImgURL}
            imgHover={LogoInstagramSecondaryImgURL}
            alt="Logo Instagram"
          />
        </ContainerSocialMedia>
        <div>
          <a href={CV} download="IgorPestana-CV" target="blank">
            <Button>Résumé</Button>
          </a>
          <a href="#Contact" >
            <Button>Contact</Button>
          </a>
        </div>
      </ContainerHomeBottom>

      <span id="AboutMe"></span>
    </ContainerHome>
  );
};