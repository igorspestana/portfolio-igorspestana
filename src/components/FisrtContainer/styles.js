import styled, { keyframes } from "styled-components"

const OpacityPalavra = keyframes`
  0%{
    opacity: 0;
  }100%{
    opacity: 1;
  }
`

const RevealBlock = keyframes`
  0%{
    transform: translateX(0%);
  }100%{
    transform: translateX(100%);
  }
`

export const ContainerHome = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
  justify-content: center;
  align-items: center;
`

export const ContainerHomeTop = styled.div`
  h1{
    text-align: center;
    font-size: 98px;
    letter-spacing: 0.1em;

    @media screen and (max-width:  768px){
      font-size: 56px;
    }
    @media screen and (max-width: 426px){
      font-size: 48px;
    }
  }

  p{
    text-align: center;
    font-size: 40px;
    letter-spacing: 0.1em;
    @media screen and (max-width:  768px){
      font-size: 20px;
    }
    @media screen and (max-width: 426px){
      font-size:18px;      
    }
  }
`
export const WorksSection = styled.div`
  display: inline-block;
  overflow: hidden;
  position: relative;
  transform: translateY(10px);
  @media screen and (max-width: 426px){
    transform: translateY(6px);
  }

  ::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.colorBg};
    transform: translateX(-100%);
    animation: ${RevealBlock} 4s infinite;
  }
`

export const TextAnimation = styled.span`
  position: relative;
  opacity: 0;
  animation: ${OpacityPalavra} 4s infinite;
`

export const ContainerHomeBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div{
    display: flex;
    align-items: center;
    gap: 30px;

    @media screen and (max-width:  768px){
      gap: 20px;    
    }
    @media screen and (max-width: 426px){
      gap: 15px;
    }
  }
`
export const ContainerSocialMedia = styled.div`
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;

  img{
    margin: 48px 7px;
    width: 32px;
    
    @media screen and (max-width:  768px){
      margin: 48px 3px;
    }
  }
`