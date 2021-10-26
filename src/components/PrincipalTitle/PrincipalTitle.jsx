import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import './hamburger.css'

const Principal = styled.div`
	width: 100%;
	padding: 15px 19px;
	display: flex;
	justify-content: space-between;
	background-image: url('./assets/suggestions/mobile/background-header.png');
	background-size: cover;
	background-position: center;
	color: white;
`
const Title = styled.h1`
	font-size: 16px;
`
const Subtitle = styled.h2`
	opacity: 0.8;
	font-size: 13px;
`

export default function PrincipalTitle({ isOpenNav, setIsOpenNav }) {
	const refMenu = useRef(null)
	const handleMenu = () => {
		setIsOpenNav(!isOpenNav)
	}
	useEffect(() => {
		isOpenNav
			? refMenu.current.classList.add('is-active')
			: refMenu.current.classList.remove('is-active')
	}, [isOpenNav])
	return (
		<Principal>
			<div>
				<Title>Frontend Test</Title>
				<Subtitle>Feedback Board</Subtitle>
			</div>
			<button
				className='hamburger hamburger--spin'
				type='button'
				ref={refMenu}
				onClick={handleMenu}
			>
				<span className='hamburger-box'>
					<span className='hamburger-inner'></span>
				</span>
			</button>
		</Principal>
	)
}
