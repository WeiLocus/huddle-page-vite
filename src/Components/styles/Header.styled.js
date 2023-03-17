import styled from "styled-components";


export const StyledHeader = styled.header`
  /* background-color: ${(props) => props.bg}; */
  background-color: ${( {theme}) => theme.headerBgColor};
  color: ${({theme}) => theme.textColor };
  padding: 40px 0;

`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: 768px){
    flex-direction: column;
  }
`

export const Logo = styled.img`
  @media (max-width: 768px){
    margin-bottom: 40px;
  }`

export const Image =styled.img`
  width: 375px;
  margin-left: 40px;

  @media (max-width: 768px){
    margin: 40px 0 30px;
  }
`