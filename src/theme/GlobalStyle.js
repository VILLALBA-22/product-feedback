import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Jost', sans-serif;
  }
  h1{
    font-size: 15px;
  }
  h3{
    font-size: 13px;
    font-weight: bold;
  }
  p{
    font-size: 13px;
    color: #647196;
  }
  button{
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;
  }
  @media (min-width: 580px) {
		h3{
      font-size: 14px;
    }
    p{
      font-size: 14px;
    }
    button{
    font-size: 14px;
    }
    .title-form{
      font-size: 24px !important;
    }
    h1{
    font-size: 20px;

    }
	}
`

export default GlobalStyle
