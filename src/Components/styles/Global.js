import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
    * {
      box-sizing: border-box;
    }
    body {
      /* 透過變數指定 */
      background: ${({ theme }) => theme.bodyColor};
      /* color: hsl(192, 100%, 9%); */
      font-family: 'Poppins', sans-serif;
      font-size: 1.15em;
      margin: 0;
    }
    p {
      opacity: 0.6;
      line-height: 1.5; 
    }
    img {
      max-width: 100%;
    }
`
export const  lightTheme = {
  theme: 'light',
  headerColor: '#ebfbff',
  headerBgColor: '#ebfbff',
  bodyColor: '#fff',
  bodyBgColor: '#ebfbff',
  textColor: 'hsl(192, 100%, 9%)',
  footerColor: '#fff',
  footerBgColor: '#216565',
  cardColor: '#fff',
}

export const  darkTheme = {
  theme: 'dark',
  headerColor: '#333',
  headerBgColor: '#333',
  bodyColor: '#333',
  bodyBgColor: '#333',
  textColor: 'hsl(0, 0%, 96%)',
  footerColor: 'hsl(0, 0%, 60%)',
  footerBgColor: '#333',
  cardColor: 'hsl(0, 0%, 41%)',
}
export default GlobalStyles