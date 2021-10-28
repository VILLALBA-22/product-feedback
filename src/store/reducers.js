import { combineReducers } from 'redux'
import {
	DELETE_SUGGESTION,
	UPDATE_SUGGESTION,
	CREATE_SUGGESTION,
	FILTERED_SEGGESTIONS,
} from './actions'

const exampleSuggestions = [
	{
		title: 'Add tags for solutions',
		description: 'Add tags for solutions',
		status: { value: 'planned', label: 'Planned' },
		category: { value: 'ux', label: 'UX' },
		id: 1,
	},
	{
		title: 'Add a dark theme option',
		description:
			'It would help people with light sensitivities and who prefer dark mode.',
		status: { value: 'planned', label: 'Planned' },
		category: { value: 'feature', label: 'Feature' },
		id: 2,
	},
	{
		title: 'Allow image/video upload',
		description: 'Images and screencasts can enhance comments on solutions.',
		status: { value: 'planned', label: 'Planned' },
		category: { value: 'enhancement', label: 'Enhancement' },
		id: 3,
	},
]
function suggestions(state = [...exampleSuggestions], { type, payload }) {
	switch (type) {
		case DELETE_SUGGESTION:
			return state.filter(sug => sug.id !== payload)
		case UPDATE_SUGGESTION:
			let newSuggestions = state.filter(sug => sug.id !== payload.id)
			return [...newSuggestions, payload]
		case CREATE_SUGGESTION:
			return [...state, payload]
		default:
			return state
	}
}

function filteredSuggestions(state = 'All', { type, payload }) {
	switch (type) {
		case FILTERED_SEGGESTIONS:
			return payload
		default:
			return state
	}
}

const rootReducer = combineReducers({
	filteredSuggestions,
	suggestions,
})

export default rootReducer
