import React from "react";

import { ImgToggleColor } from '../ImgToggleColor/index.js'

import LogoUpImgURL from '../../icons/up.png';
import LogoUpDarkImgURL from '../../icons/up-dark.png';
import LogoUpsecondaryImgURL from '../../icons/up-secondary.png';

import { Container, SocialMidia, Content } from "./styles";

export function Footer() {
  return (
    <Container>
      <Content>
        <SocialMidia>
          <ImgToggleColor
            link="#"
            imgWhite={LogoUpImgURL}
            imgDark={LogoUpDarkImgURL}
            imgHover={LogoUpsecondaryImgURL}
            alt="Logo GitHub"
          />
        </SocialMidia>
        <p>© Copyright 2023 Igor S. Pestana Software Developer</p>
      </Content>
    </Container>
  );
};