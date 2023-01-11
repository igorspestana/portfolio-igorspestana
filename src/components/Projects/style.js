import styled, { keyframes } from "styled-components";

const animationOpacity = keyframes`
  0%{
    opacity: 0.50;
  }
  100%{
    opacity: 1;
  }
`

export const CardProjects = styled.div`
  min-width: 280px;
  height: 320px;
  padding: 12px;
  margin: 10px 10px 10px 10px;

  display: flex;
  flex-direction: column;
  justify-content:space-around ;
  text-align: center;
  gap: 8px;
`

export const ContainerTopCard = styled.div`
  text-align: center;
  transition: all 0.3s ease;
  opacity: 1;
  overflow: hidden;
  transform: scale(1);
  position: relative;

  :hover{
    transform: scale(1.1);
  }

  &:hover::before{
    content: 'Open Repository';
    cursor: pointer;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    font-size: 20px;
    font-weight: 700;
    color: #ffffff;
    background-color: #10101070;
    animation: ${animationOpacity} 0.3s ;
  }

  img{
    width: 100%;
  }
`

export const TechsProject = styled.p`
  color: #afafaf;
  font-size: 14px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
`