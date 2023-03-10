import React from "react";

import LogoHTMLImgUrl from '../../icons/logo-html5-icon.png';
import LogoCSSImgUrl from '../../icons/logo-css3-icon.png';
import LogoJavascriptImgUrl from '../../icons/logo-javascript-icon.svg';
import LogoFigmaImgUrl from '../../icons/logo-figma-icon.png';
import LogoReactImgUrl from '../../icons/logo-react-icon.png';
import LogoGitImgUrl from '../../icons/logo-git-icon.png';
import LogoTailwindImgUrl from '../../icons/logo-tailwind-icon.svg';
import LogoVsCodeImgUrl from '../../icons/logo-vscode-icon.png';
import LogoDockerImgUrl from '../../icons/logo-docker-icon.svg';
import LogoPopsImgUrl from '../../icons/logo-pop-icon.svg';
import LogoShellImgUrl from '../../icons/logo-bash-icon.png';
import LogoMongoDBImgUrl from '../../icons/logo-mongodb-icon.svg';
import LogoExpressImgUrl from '../../icons/logo-express-icon.svg';
import LogoNodeImgUrl from '../../icons/logo-node-icon.svg';
import LogoReactNativeImgUrl from '../../icons/logo-reactnative-icon.png';
import LogoKotlinImgUrl from '../../icons/logo-kotlin-icon.svg';
import LogoAndroidImgUrl from '../../icons/logo-android-icon.svg';
import LogoTypeScriptImgUrl from '../../icons/logo-typescript-icon.svg';
import LogoViteImgUrl from '../../icons/logo-vite-icon.svg';
import LogoGithubImgUrl from '../../icons/logo-github-icon.png';

import { Container, ContainerTop } from "./styles";

export function Skills() {
  return (
    <Container>

      <h1>Some tools and technologies</h1>

      <ContainerTop>
        <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" rel="noreferrer" target="_blank">
          <div>
            <img src={LogoHTMLImgUrl} alt="Logo HTML5" />
          </div>
        </a>
        <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" rel="noreferrer" target="_blank">
          <div>
            <img src={LogoCSSImgUrl} alt="Logo CSS3" />
          </div>
        </a>
        <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" rel="noreferrer" target="_blank">
          <div>
            <img src={LogoJavascriptImgUrl} alt="Logo JavaScript" />
          </div>
        </a>
        <a href="https://www.typescriptlang.org/" rel="noreferrer" target="_blank">
          <div>
            <img src={LogoTypeScriptImgUrl} alt="Logo TypeScript" />
          </div>
        </a>
        <a href="https://tailwindcss.com/" rel="noreferrer" target="_blank">
          <div>
            <img src={LogoTailwindImgUrl} alt="Logo Tailwind" />
          </div>
        </a>
        <a href="https://vitejs.dev/" rel="noreferrer" target="_blank">
          <div>
            <img src={LogoViteImgUrl} alt="Logo Vite" />
          </div>
        </a>
        <a href="https://reactjs.org/" rel="noreferrer" target="_blank">
          <div>
            <img src={LogoReactImgUrl} alt="Logo ReactJS" />
          </div>
        </a>
        <a href="https://www.figma.com/" rel="noreferrer" target="_blank">
          <div>
            <img src={LogoFigmaImgUrl} alt="Logo Figma" />
          </div>
        </a>
        <a href="https://nodejs.org/en/" rel="noreferrer" target="_blank">
          <div>
            <img src={LogoNodeImgUrl} alt="Logo Node.js" />
          </div>
        </a>
        <a href="https://expressjs.com/pt-br/" rel="noreferrer" target="_blank">
          <div>
            <img src={LogoExpressImgUrl} alt="Logo Express.js" />
          </div>
        </a>
        <a href="https://git-scm.com/" rel="noreferrer" target="_blank">
          <div>
            <img src={LogoGitImgUrl} alt="Logo Git" />
          </div>
        </a>
        <a href="https://github.com/" rel="noreferrer" target="_blank">
          <div>
            <img src={LogoGithubImgUrl} alt="Logo Github" />
          </div>
        </a>
        <a href="https://reactnative.dev/" rel="noreferrer" target="_blank">
          <div>
            <img src={LogoReactNativeImgUrl} alt="Logo React Native" />
          </div>
        </a>
        <a href="https://kotlinlang.org/" rel="noreferrer" target="_blank">
          <div>
            <img src={LogoKotlinImgUrl} alt="Logo Kotlin" />
          </div>
        </a>
        <a href="https://www.mongodb.com/" rel="noreferrer" target="_blank">
          <div>
            <img src={LogoMongoDBImgUrl} alt="Logo MongoDB" />
          </div>
        </a>
        <a href="https://www.docker.com/" rel="noreferrer" target="_blank">
          <div>
            <img src={LogoDockerImgUrl} alt="Logo Docker" />
          </div>
        </a>
        <a href="https://developer.android.com/" rel="noreferrer" target="_blank">
          <div>
            <img src={LogoAndroidImgUrl} alt="Logo Android Studio" />
          </div>
        </a>
        <a href="https://code.visualstudio.com/" rel="noreferrer" target="_blank">
          <div>
            <img src={LogoVsCodeImgUrl} alt="Logo Vs Code" />
          </div>
        </a>
        <a href="https://devdocs.io/bash/" rel="noreferrer" target="_blank">
          <div>
            <img src={LogoShellImgUrl} alt="Logo Shell Script" />
          </div>
        </a>
        <a href="https://pop.system76.com/" rel="noreferrer" target="_blank">
          <div>
            <img src={LogoPopsImgUrl} alt="Logo Pop OS" />
          </div>
        </a>
      </ContainerTop>
      <span id="Projects"></span>
    </Container>
  );
};