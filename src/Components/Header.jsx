import {StyledHeader, Nav, Logo, Image } from './styles/Header.styled'
import { Container } from './styles/Container.styled'
import { Button, ButtonTheme, GridButton } from './styles/Button.styled'
import { Flex } from './styles/Flex.styled'
import { FaToggleOn } from 'react-icons/fa'
export default function Header ({onClick}) {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src='./images/logo.svg' alt=''/>
          <GridButton>
            <Button >Try It free</Button>
            <ButtonTheme onClick={onClick} bg='#add8e6'><FaToggleOn/>
            </ButtonTheme>
          </GridButton>
        </Nav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <Button 
              bg='#ff0099' color='#fff'>
              Get Started For Free
            </Button>
          </div>
          <Image src='./images/illustration-mockups.svg' alt=''/>
        </Flex>
      </Container>
    </StyledHeader>
  )
}