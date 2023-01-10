import styled from "styled-components"

export const Container = styled.section`
   display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  padding-bottom: 150px;
  margin: 0 auto;


  @media screen and (max-width:  768px){
    margin-bottom: 100px;
  }

  h1{
    font-size: 36px;
    text-align: center;
    margin-bottom: 48px;

    @media screen and (max-width:  768px){
      font-size: 28px;
    }
    @media screen and (max-width: 426px){
      font-size: 24px;
    }
  }
`

export const Content = styled.div`
  max-width:1024px;
  display: flex;
  align-items: center;
  padding:0px 100px 0px 100px ;
  gap: 10px;
  overflow-x: scroll;
  justify-content: flex-start;
  

  @media screen and (max-width:  768px){
    display: flex;
    flex-direction: column;
    padding:0px 10px 0px 10px ;
  }
`