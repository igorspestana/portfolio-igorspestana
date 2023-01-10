import React, { useContext, useState } from "react";
import { ThemeContext } from "../../Provider/ThemesProvider/index";

import SettingsDarkImgURL from '../../icons/settings-dark.png';
import SettingsImgURL from './../../icons/settings.png';
import MoonImgURL from '../../icons/moon.png';
import SunImgURL from '../../icons/sun.png';
import CloseImgURL from '../../icons/close.png';
import CloseDarkImgURL from '../../icons/close-dark.png';
import MenuImgURL from '../../icons/menu.png';
import MenuDarkImgURL from '../../icons/menu-dark.png';


import {
  Container,
  NavBar,
  ContainerSettings,
  SwitchTheme,
  SwitchSettings,
  ContainerMenu,
  IconMenu,
  ButtonClose,
  ContentFromTabletAndMobile
} from "./styles";

export function Header() {
  const { theme, handleThemes } = useContext(ThemeContext);

  const [themeVisible, setThemeVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  function showIconThemes() {
    themeVisible === true ? setThemeVisible(false) : setThemeVisible(true)
  };

  function handleThemesFunction() {
    handleThemes()
  };

  return (
    <Container>
      <ContainerMenu menuItIsVisible={menuVisible}>
        <ButtonClose onClick={() => { setMenuVisible(false) }}>
          {theme.title === 'dark' ? (
            <img src={CloseImgURL} alt="Fechar menu" />
          ) : (
            <img src={CloseDarkImgURL} alt="Fechar menu" />
          )}
        </ButtonClose>

        <nav>
          <a href="#Home">Home</a>
          <a href="#AboutMe">About me</a>
          <a href="#Skills">Skills</a>
          <a href="#Projects">Projects</a>
          <a href="#Contact">Contact</a>
        </nav>

      </ContainerMenu>

      <ContentFromTabletAndMobile>
        {theme.title === 'dark' ? (
          <IconMenu
            onClick={() => { setMenuVisible(true) }}
            src={MenuImgURL}
            alt="Ícone do menu"
          />
        ) : (
          <IconMenu
            onClick={() => { setMenuVisible(true) }}
            src={MenuDarkImgURL}
            alt="Ícone do menu"
          />
        )}

        <div>
          <button>
            {theme.title === 'dark' ? (
              <img
                src={SunImgURL}
                onClick={handleThemesFunction}
                alt="ícone de tema"
              />
            ) : (
              <img
                src={MoonImgURL}
                onClick={handleThemesFunction}
                alt="ícone de tema"
              />
            )}
          </button>
        </div>
      </ContentFromTabletAndMobile>

      <NavBar>
        <a href="#Home">Home</a>
        <a href="#AboutMe">About me</a>
        <a href="#Skills">Skills</a>
        <a href="#Projects">Projects</a>
        <a href="#Contact">Contact</a>
      </NavBar>

      <ContainerSettings>
        <SwitchTheme isVisible={themeVisible}>
          <button>
            {theme.title === 'dark' ? (
              <img
                src={SunImgURL}
                onClick={handleThemesFunction}
                alt="theme icon"
              />
            ) : (
              <img
                src={MoonImgURL}
                onClick={handleThemesFunction}
                alt="theme icon"
              />
            )}
          </button>
        </SwitchTheme>

        <SwitchSettings>
          {theme.title === 'dark' ? (
            <img
              src={SettingsImgURL}
              onClick={showIconThemes}
              alt="settings"
            />
          ) : (
            <img
              src={SettingsDarkImgURL}
              onClick={showIconThemes}
              alt="settings"
            />
          )}
        </SwitchSettings>
      </ContainerSettings>
    </Container>
  );
};