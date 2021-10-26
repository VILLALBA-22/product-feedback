import React, { useState } from 'react'
import styled from 'styled-components'
import MobileFilter from '../components/MobileFilter/MobileFilter'
import NoFeedback from '../components/NoFeedback/NoFeedback'
import NumberSuggestions from '../components/NumberSuggestions/NumberSuggestions'
import PrincipalTitle from '../components/PrincipalTitle/PrincipalTitle'
import Suggestion from '../components/Suggestion/Suggestion'

const ContainerMain = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #f7f8fd;
}
`
const ContainerSuggestions = styled.div`
	padding: 30px 25px;
`

export default function Main() {
	const [isOpenNav, setIsOpenNav] = useState(false)
	return (
		<ContainerMain>
			<div>
				<PrincipalTitle isOpenNav={isOpenNav} setIsOpenNav={setIsOpenNav} />
			</div>
			<div>
				<NumberSuggestions />
			</div>

			<ContainerSuggestions>
				<NoFeedback />
				{/* <Suggestion /> */}
			</ContainerSuggestions>
			<MobileFilter isOpenNav={isOpenNav} setIsOpenNav={setIsOpenNav} />
		</ContainerMain>
	)
}
