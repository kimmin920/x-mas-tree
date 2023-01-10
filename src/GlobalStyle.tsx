import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --color-primary-rgb: 34, 34, 34;
    --bg-secondary: #222;
    --rounded-normal: 8px;
    --color-primary: #222;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }


  #float-menu {
    position: fixed;
    top: 0;
    left: 0;
    right:0;
    bottom: 0;
    z-index: 2;
  }

  html, body {
    height: 100%;
    width: 100%;
    position: relative;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
  }

  h2, p {
    margin: 0;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

export default GlobalStyle
