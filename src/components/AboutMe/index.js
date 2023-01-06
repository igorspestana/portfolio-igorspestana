import React from "react";

import ProfileImgURL from '../../assets/igor.png';


import {
  ContainerAbout,
  ContainerAboutBottom,
  CardImgsAndSocial,
  ImgProfile
} from "./styles";

export const AboutMe = () => {


  return (
    <ContainerAbout>
      <h1>
        About me
      </h1>

      <ContainerAboutBottom>
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, mollitia, veritatis recusandae aut officiis inventore reprehenderit labore quasi corporis quae molestiae cumque odio atque a molestias voluptate sint? Impedit, enim.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, mollitia, veritatis recusandae aut officiis inventore reprehenderit labore quasi corporis quae molestiae cumque odio atque a molestias voluptate sint? Impedit, enim.
          </p>
        </div>

        <CardImgsAndSocial>
          <ImgProfile src={ProfileImgURL} alt="Igor" />
        </CardImgsAndSocial>
      </ContainerAboutBottom>

      <span id="Skills"></span>
    </ContainerAbout>
  );
}