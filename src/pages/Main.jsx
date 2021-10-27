import React, { useState } from 'react'
import styled from 'styled-components'
import MobileFilter from '../components/MobileFilter/MobileFilter'
import NoFeedback from '../components/NoFeedback/NoFeedback'
import NumberSuggestions from '../components/NumberSuggestions/NumberSuggestions'
import PrincipalTitle from '../components/PrincipalTitle/PrincipalTitle'
import Suggestion from '../components/Suggestion/Suggestion'
import FilterByCategory from '../components/FilterByCategory/FilterByCategory'

const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	background: #f7f8fd;
`

const ContainerMain = styled.div`
	margin: auto;
	max-width: 1010px;
	.category-table-desktop {
		display: none;
	}
	@media (min-width: 700px) {
		display: grid;
		padding: 60px 40px;
		gap: 20px;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-areas:
			'PrincipalTitle FilterByCategory .'
			'NumberSuggestions NumberSuggestions NumberSuggestions'
			'ContainerSuggestions ContainerSuggestions ContainerSuggestions';
		.category-table-desktop {
			display: flex;
		}
	}
	@media (min-width: 1000px) {
		display: grid;
		padding: 95px 40px;
		gap: 30px 25px;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		${'' /* grid-template-rows: masonry; */}
		grid-template-areas:
			'PrincipalTitle NumberSuggestions NumberSuggestions NumberSuggestions'
			'FilterByCategory ContainerSuggestions ContainerSuggestions ContainerSuggestions';
		.category-table-desktop {
			display: flex;
			margin-top: -5px;
			height: 158px;
		}
	}
`
const ContainerSuggestions = styled.div`
	padding: 30px 25px;
	grid-area: ContainerSuggestions;
	@media (min-width: 700px) {
		padding: 0;
	}
	@media (min-width: 1000px) {
		margin-top: -90px;
	}
`

export default function Main() {
	const [isOpenNav, setIsOpenNav] = useState(false)
	return (
		<Container>
			<ContainerMain>
				<PrincipalTitle isOpenNav={isOpenNav} setIsOpenNav={setIsOpenNav} />
				<FilterByCategory className='category-table-desktop' />
				<NumberSuggestions />
				<ContainerSuggestions>
					{/* <NoFeedback /> */}
					<Suggestion />
				</ContainerSuggestions>
				<MobileFilter isOpenNav={isOpenNav} setIsOpenNav={setIsOpenNav} />
			</ContainerMain>
		</Container>
	)
}
