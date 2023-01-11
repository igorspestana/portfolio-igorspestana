import styled from "styled-components"


export const ContainerAbout = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  padding-bottom: 150px;
  
  h1{
    font-size: 48px;
    margin-bottom: 48px;
    text-align: center;
    @media screen and (max-width:  768px){
      font-size:42px ;
    }
    @media screen and (max-width: 426px){
      font-size: 36px;
    }
  }
`

export const ContainerAboutBottom = styled.div`
  max-width:800px;
  padding: 0px 20px ;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 48px; 
  @media screen and (max-width:  768px){
    flex-direction: column;
    text-align: center;
    gap:20px
  }

  h2{
   text-align: center;
   font-size: 36px;
   margin-bottom: 24px;
   @media screen and (max-width:  768px){
      font-size:24px ;
    }
    @media screen and (max-width: 426px){
      font-size: 20px;
    }
  }

  h3{
   text-align: center;
   font-size: 24px;
   margin-bottom: 24px;
   @media screen and (max-width:  768px){
      font-size:20px ;
    }
    @media screen and (max-width: 426px){
      font-size: 18px;
    }
  }


  p{
    font-size: 18px;
    font-style: normal;
    text-align: center; 
    margin: 10px;
    @media screen and (max-width: 426px){
      font-size: 16px;
      text-align: center; 
    }
  }
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
`
