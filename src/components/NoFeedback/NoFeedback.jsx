import React from 'react'
import styled from 'styled-components'
import AddBtn from '../common/AddBtn'

const Container = styled.div`
	margin-top: 68px;
	background-color: #ffffff;
	border-radius: 10px;
	padding: 25px;
	padding-bottom: 76px;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (min-width: 700px) {
		margin-top: 0px;
	}
`
const Img = styled.img`
	margin: 50px auto 40px auto;
`
const H3 = styled.h3`
	text-align: center;
	font-size: 18px;
	margin-bottom: 14px;
	color: #3a4374;
`
const P = styled.p`
	text-align: center;
	color: #647196;
	font-size: 13px;
	margin-bottom: 24px;
	max-width: 410px;
`
export default function NoFeedback() {
	return (
		<Container>
			<Img src='./assets/suggestions/illustration-empty.svg' />
			<H3>There is no feedback yet.</H3>
			<P>
				Got a suggestion? Found a bug that needs to be squashed? We love hearing
				about new ideas to improve our app.
			</P>
			<AddBtn />
		</Container>
	)
}
