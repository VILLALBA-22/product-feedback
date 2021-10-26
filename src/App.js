import AppRouter from './routes/AppRouter'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Jost', sans-serif;
  }
`

function App() {
	return (
		<>
			<GlobalStyle />
			<AppRouter />
		</>
	)
}

export default App
