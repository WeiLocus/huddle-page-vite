import { Container, FooterContainer  } from "./styles/Container.styled"
import { Flex } from "./styles/Flex.styled"
import styled from "styled-components"
import SocialIcons from "./SocialIcons"

const StyledFooter = styled.footer`
background-color: ${ ({theme}) => theme.footerBgColor};
color: ${ ({theme}) => theme.footerColor};
padding: 100px 0 60px;

ul {
  list-style-type: none;
}

ul li {
  margin-bottom: 20px;
}

p {
  text-align: right;
}

/* media */
@media (max-width: ${(size) => size.mobile}) {
  text-align: center;
  ul {
    padding: 0;
  }
  p {
    text-align: center;
  }
}
`

export default function Footer () {
  return (
    <StyledFooter>
      <FooterContainer>
      <img src='./images/logo_white.svg' alt=''/>
      <Flex>
        <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <SocialIcons />
      </Flex>
      <p>&copy; 2021 Huddle. All rights reserved</p>
      </FooterContainer>
    </StyledFooter>
  )
}