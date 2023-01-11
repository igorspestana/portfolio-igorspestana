import styled from "styled-components"

export const Container = styled.footer`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 0px 0px 50px 10px;

  @media screen and (max-width:  768px){
    justify-content: center;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  font-weight: 700;
  font-size: 14px;
  text-align: center;

  @media screen and (max-width:  768px){
    flex-direction: column;
    gap: 10px;
  }

  p {
    font-weight: 300;
  }

  span{
    @media screen and (max-width:  768px){
      display: none;
    }
  }

  img{
    width: 40px;
  }
`

export const SocialMidia = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`