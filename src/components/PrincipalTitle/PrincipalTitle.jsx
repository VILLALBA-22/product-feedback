import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import './hamburger.css'

const Principal = styled.div`
	width: 100%;
	padding: 15px 19px;
	display: flex;
	justify-content: space-between;
	background: radial-gradient(
		128.88% 128.88% at 103.9% -10.39%,
		#e84d70 0%,
		#a337f6 53.09%,
		#28a7ed 100%
	);
	color: white;
	box-shadow: 0px 2px 10px #8080805c;
	grid-area: PrincipalTitle;
	@media (min-width: 700px) {
		border-radius: 10px;
		align-items: end;
	}
	@media (min-width: 1000px) {
		height: 135px;
	}
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
				<h1>Frontend Test</h1>
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
