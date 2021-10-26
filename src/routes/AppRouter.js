import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from '../pages/Main'
import NewFeedback from '../pages/NewFeedback'

export default function AppRouter() {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Main} />
				<Route exact path='/addSuggestion' component={NewFeedback} />

				{/* <Route path='*' component={NotFound} /> */}
			</Switch>
		</Router>
	)
}
