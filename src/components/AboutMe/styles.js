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
  max-width:1024px;
  padding: 48px;
  display: grid;
  grid-template: auto / 2fr 1fr;
  gap: 20px;
  align-items: center;
  

  @media screen and (max-width:  768px){
    grid-template: auto auto / auto;
    text-align: center;
  }

  p{
    padding-bottom: 16px;
    font-size: 20px;
    font-style: normal;
    z-index: 5;
    @media screen and (max-width: 426px){
      font-size: 16px;
    }
  }
`
export const CardImgProfile = styled.div`
  @media screen and (max-width:  768px){
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
export const ImgProfile = styled.img`
  width: 250px;
  margin: 20px;
`
