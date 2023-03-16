import {Container} from './Components/styles/Container.styled'
import Header from './Components/Header'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './Components/styles/Global';
import content from '../content'
import Card from './Components/Card' 
import Footer from './Components/Footer'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#216565'
  },
  mobile: '768px',
}

function App() {
  return (
    <ThemeProvider theme= {theme}>
    <>
    <GlobalStyles />
    <Header/>
    <Container>
      {content.map ((item,index) => (
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
