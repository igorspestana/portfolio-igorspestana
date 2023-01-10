import styled from "styled-components"

export const Container = styled.section`
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
      font-size: 28px;
    }
    @media screen and (max-width: 426px){
      font-size: 24px;
    }
  }
`

export const ContainerTop = styled.div`
  max-width: 765px;
  display: grid;
  grid-template: auto auto / auto auto auto auto;

  a{
    transition: all 0.5s;
    :hover{
      transform: scale(1.5);  
    } 
  }
  
  div{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 180px;
    padding: 20px;
    cursor: pointer;

    img{
      width: 48px;
    }

    @media screen and (max-width:  768px){
      width: 20vw;
      img{
      width: 48px;
      }
    }
  }
`