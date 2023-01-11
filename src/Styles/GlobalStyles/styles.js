import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root{
    --color-main: #141b1f;
    --color-secondary: #203f5c;
    --color-tertiary: #afafaf;

    --color-main-text: #f4f5f5;
    --color-secondary-text: #020202;
    --color-tertiary-text: #afafaf;
  }

  html{
    scroll-behavior: smooth;
  }

  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    outline: none;
    font-family: 'Poppins', sans-serif;
    color:  ${({ theme }) => theme.colors.colorText};
  }

  body{
    background-color: ${({ theme }) => theme.colors.colorBg};
  }

  a{
    text-decoration: none;

    :hover{
      color: var(--color-secondary);
    }
  }
`