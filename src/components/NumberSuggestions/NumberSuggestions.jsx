import styled from 'styled-components'
import AddBtn from '../common/AddBtn'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Container = styled.div`
	background-color: #373f68;
	padding: 5px 19px;
	box-shadow: 0px 2px 10px #8080805c;
	color: white;
	display: flex;
	align-items: center;
	justify-content: space-between;
	grid-area: NumberSuggestions;
	max-height: 55px;
	box-shadow: 0px 2px 10px #8080805c;
	@media (min-width: 700px) {
		border-radius: 10px;
	}
`
const ContainerNumber = styled(Container)`
	padding: 0px;
	box-shadow: none;
`
const TextSuggestions = styled.span`
	margin-left: 10px;
	font-weight: bold;
	font-size: 14px;
`

function NumberSuggestions({ suggestions }) {
	return (
		<Container>
			<ContainerNumber>
				<img
					src={'./assets/suggestions/icon-suggestions.svg'}
					height='23'
					alt='ideas icon'
				/>
				<TextSuggestions>{suggestions.length} Suggestions</TextSuggestions>
			</ContainerNumber>
			<Link to='/add-feedback' style={{ textDecoration: 'none' }}>
				<AddBtn />
			</Link>
		</Container>
	)
}

const mapStateToProps = state => {
	return {
		suggestions: state.suggestions,
	}
}

export default connect(mapStateToProps)(NumberSuggestions)
