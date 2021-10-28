export const DELETE_SUGGESTION = 'DELETE_SUGGESTION'
export function deleteSuggestion(id) {
	return {
		type: DELETE_SUGGESTION,
		payload: id,
	}
}

export const UPDATE_SUGGESTION = 'UPDATE_SUGGESTION'
export function updateSuggestion(suggestion) {
	return {
		type: UPDATE_SUGGESTION,
		payload: suggestion,
	}
}
export const CREATE_SUGGESTION = 'CREATE_SUGGESTION'
export function createSuggestion(suggestion) {
	return {
		type: CREATE_SUGGESTION,
		payload: suggestion,
	}
}
export const FILTERED_SEGGESTIONS = 'FILTERED_SEGGESTIONS'
export function filteredSuggestions(tag) {
	return {
		type: FILTERED_SEGGESTIONS,
		payload: tag,
	}
}
