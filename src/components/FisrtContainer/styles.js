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
  margin-top: 200px;

  img{
    width: 210px;

    @media screen and (max-width:  768px){
      width: 150px;
    }
  }
`

export const ContainerHomeTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  gap: 10px;
  padding: 10px;

  h1{
    text-align: center;
      font-size: 98px;
      letter-spacing: 0.1em;
  }

  p{
    text-align: center;
    font-size: 40px;
    letter-spacing: 0.1em;
  }
  @media screen and (max-width:  768px){
    margin-bottom: 0px;
  }

  @media screen and (max-width: 426px){
    flex-direction: column;
    gap: 0px;
  }

  div:nth-child(1){
    img{
      border-radius: 50%;
    }
  }
  
  /*  
  div:nth-child(2){
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media screen and (max-width: 426px){
      align-items: center;
    }
    
    p:nth-child(1){
      font-weight: 800;
      font-size: 118px;
      transform: translateY(20px);

      @media screen and (max-width:  768px){
        font-size: 57px;
        transform: translateY(10px);
      }
    }
    p:nth-child(2){
      font-weight: 800;
      font-size: 90px;
      transform: translateY(-20px);

      @media screen and (max-width:  768px){
        font-size: 40px;
        transform: translateY(-10px);
      }
    }
  } */  
`

export const ContainerHomeBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;

  p{
    text-align: center;
    font-size: 40px;
    letter-spacing: 0.1em;

    @media screen and (max-width:  768px){
        font-size: 28px;
    }
    @media screen and (max-width: 426px){
      flex-direction: column;
      font-size: 24px;
    }
  }

  div{
    display: flex;
    align-items: center;
    gap: 30px;

    @media screen and (max-width:  768px){
      gap: 20px;    
    }
    @media screen and (max-width: 426px){
      flex-direction: column;
      gap: 5px;
    }
  }
`
export const ContainerSocialMedia = styled.div`
  display: flex;
  justify-content: flex-end;

  img{
    margin: 7px 7px 14px 7px;
    width: 32px;
  }

  @media screen and (max-width:  768px){
    display: none;
  }
`

export const ContainerSocialMedia768 = styled.div`
  display: flex;
  gap: 20px;

  @media screen and (min-width:  769px){
    display: none;
  }
  @media screen and (max-width: 426px){
    align-self: flex-end;
  }
  
  img{
    width: 50px;
    @media screen and (max-width: 426px){
      width: 30px;
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