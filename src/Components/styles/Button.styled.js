import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0,0,0,0.15);
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  background-color: ${({bg}) => bg || '#fff'};
  color: ${({color}) => color || '#333'};
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98)
  }
`

export const ButtonTheme = styled.button`
  border-radius: 30px;
  border: none;
  box-shadow: 0 0 10px rgba(0,0,0,0.15);
  font-size: 16px;

  padding: 10px 20px;
  margin: 0 10px;
  background-color: ${({bg}) => bg || '#fff'};
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    font-size: 20px;
    transform: scale(0.98)
  }
`

export const GridButton = styled.div`
`