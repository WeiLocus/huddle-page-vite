import {Container} from './Components/styles/Container.styled'
import Header from './Components/Header'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './Components/styles/Global';
import content from '../content'
import Card from './Components/Card' 
import Footer from './Components/Footer'
import { useState } from 'react';
import { lightTheme,darkTheme } from './Components/styles/Global';



function App() {

  const [theme, setTheme] = useState('light')
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <ThemeProvider theme= {theme === 'light' ? lightTheme : darkTheme}>
    <>
    <GlobalStyles />
    <Header onClick={themeToggler}/>
    <Container>
      {content.map ((item) => (
        <Card key={item.id}
          id={item.id}
          title={item.title}
          body={item.body}
          image={item.image}/>
      ))}
    </Container>
    <Footer />
    </>
    </ThemeProvider>
  );
}

export default App;
