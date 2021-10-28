import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from '../pages/Main'
import NewFeedback from '../pages/NewFeedback'
import EditFeedback from '../pages/EditFeedback'

export default function AppRouter() {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Main} />
				<Route exact path='/add-feedback' component={NewFeedback} />
				<Route exact path='/edit-feedback/:id' component={EditFeedback} />

				{/* <Route path='*' component={NotFound} /> */}
			</Switch>
		</Router>
	)
}
