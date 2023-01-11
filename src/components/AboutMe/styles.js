import styled from "styled-components"


export const ContainerAbout = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  padding-bottom: 150px;
  
  h1{
    font-size: 36px;
    margin-bottom: 48px;
    @media screen and (max-width:  768px){
      font-size:28px ;
    }
    @media screen and (max-width: 426px){
      font-size: 24px;
    }
  }
`

export const ContainerAboutBottom = styled.div`
  max-width:800px;
  padding: 0px 20px ;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px; 
  @media screen and (max-width:  768px){
    flex-direction: column;
    text-align: center;
    gap:20px
  }

  p{
    font-size: 20px;
    font-style: normal;
    text-align: justify; 
    margin: 10px;
    @media screen and (max-width: 426px){
      font-size: 16px;
      text-align: center; 
    }
  }
  img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
  }
`
