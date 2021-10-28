import AppRouter from './routes/AppRouter'
import GlobalStyle from './theme/GlobalStyle'
import { store, persistor } from './store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

function App() {
	return (
		<>
			<Provider store={store}>
				<GlobalStyle />
				<PersistGate loading={null} persistor={persistor}>
					<AppRouter />
				</PersistGate>
			</Provider>
		</>
	)
}

export default App
