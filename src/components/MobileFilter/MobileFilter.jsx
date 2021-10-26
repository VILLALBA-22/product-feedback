import React from 'react'
import styled from 'styled-components'
import FilterByCategory from '../FilterByCategory/FilterByCategory'
import { Transition } from 'react-transition-group'

const Container = styled.div`
	transition: 0.2s;
	opacity: 0;
	transform: translateY(+10px);
	&.enter,
	&.entered {
		opacity: 1;
		transform: translateY(0px);
	}
	&.exit,
	&.exited {
		opacity: 0;
		transform: translateY(+10px);
	}

	position: absolute;
	top: 72px;
	left: 0px;
	width: 100%;
	height: calc(100vh - 72px);
	min-height: 300px;
	transition: all 0.5s ease;
`
const CloseMenu = styled.div`
	position: absolute;
	width: 25%;
	background: #00000075;
	height: calc(100vh - 72px);
	min-height: 300px;
`
const ContainerFilter = styled.div`
	background: #f7f8fd;
	padding: 25px;
	position: absolute;
	right: 0px;
	width: 75%;
	height: 100%;
	min-height: 300px;
`

export default function MobileFilter({ isOpenNav, setIsOpenNav }) {
	const handleOutClick = e => {
		setIsOpenNav(!isOpenNav)
	}

	return (
		<Transition mountOnEnter unmountOnExit timeout={200} in={isOpenNav}>
			{state => {
				let className = state
				return (
					<Container className={className}>
						<CloseMenu onClick={handleOutClick} />
						<ContainerFilter>
							<FilterByCategory />
						</ContainerFilter>
					</Container>
				)
			}}
		</Transition>
	)
}
