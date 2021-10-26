import styled from 'styled-components'
import AddBtn from '../common/AddBtn'
const Container = styled.div`
	background-color: #373f68;
	padding: 5px 19px;
	color: white;
	display: flex;
	align-items: center;
	justify-content: space-between;
`
const ContainerNumber = styled(Container)`
	padding: 0px;
`
const TextSuggestions = styled.p`
	margin-left: 10px;
	font-weight: bold;
	font-size: 14px;
`

function NumberSuggestions() {
	return (
		<Container>
			<ContainerNumber>
				<img src={'./assets/suggestions/icon-suggestions.svg'} height='23' />
				<TextSuggestions>0 Suggestions</TextSuggestions>
			</ContainerNumber>
			<AddBtn />
		</Container>
	)
}

export default NumberSuggestions
