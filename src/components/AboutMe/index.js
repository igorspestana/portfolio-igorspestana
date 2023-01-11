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
          <h2>
            Hi, I’m Igor. Nice to meet you.
          </h2>
          <h3>
            I’m a software developer who loves solving problems.
          </h3>
          <p>
            I‘m a fast learner and capable to pick up and relate skills easily. I like to keep up to date, venture into new technologies and explore new features. My personality type is <a href="https://www.16personalities.com/intj-personality" rel="noreferrer" target="_blank">INTJ-T</a>.
            Currently, I’m graduating in Systems Analysis and Development and furthering my studies in web and mobile development.
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