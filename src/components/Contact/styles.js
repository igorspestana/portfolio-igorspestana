import styled from "styled-components"

export const Container = styled.section`
  max-width: 768px;
  margin: auto;
  margin-bottom: 100px;
  padding: 15px;
`

export const ContainerContactTop = styled.div`
  padding: 0px 20px ;
  h1{
    font-size: 48px;
    text-align: center;
    margin-bottom: 48px;

    @media screen and (max-width: 768px){
      font-size: 42px;
    } 
    @media screen and (max-width: 426px){
      font-size: 36px;
    }
  }
  
  p{
    font-size: 18px;
    margin-bottom: 15px;
    text-align: center;

    @media screen and (max-width: 426px){
      font-size: 16px;
    }
  }
`

export const ContainerContactBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media screen and (max-width: 426px){
    flex-direction: column;
    gap: 10px;
  }
`

export const CardContainerContactBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 200px;
  height: 100px;

  @media screen and (max-width: 426px){
    width: 90vw;
  }
  margin-top: 48px;
  transition: all 0.5s;
  box-sizing: content-box;

  p{
    font-size: 14px;
    padding: 0px 7px;
    overflow-wrap: break-word;  
    word-wrap: break-word; 
    word-break: break-word;
  }

  img{
    width: 35px;
  }
`