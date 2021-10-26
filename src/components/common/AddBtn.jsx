import styled from 'styled-components'

const Btn = styled.button`
	background: #ad1fea;
	color: white;
	border: none;
	padding: 9px 14px;
	border-radius: 6px;
	font-weight: bold;
	max-width: 144px;
`

export default function AddBtn() {
	return <Btn>+ Add Feedback</Btn>
}
