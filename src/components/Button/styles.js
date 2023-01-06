import styled from "styled-components";

export const Button = styled.button`
  background-color: #00000000;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.colorText};
  border: 1px solid ${({ theme }) => theme.colors.colorText};
  font-size: 18px;
  padding: 10px 15px;
  border-radius: 200px;
  cursor: pointer;
  transition: all 0.5s;

  :hover, :active, :focus{
    border: 1px solid black;
    background-color: ${({ theme }) => theme.colors.colorText};
    color:  ${({ theme }) => theme.colors.colorBg};
  }
`