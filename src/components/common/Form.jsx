import styled from 'styled-components'
import { Link } from 'react-router-dom'
import './style.css'

//Common form components
export const TitleInput = styled.h3`
	color: #3a4374;
	margin-top: 25px;
`
export const DescriptionInput = styled.p`
	color: #647196;
`
export const TextField = styled.input`
	transition: all 0.5s ease-in;
	border: 1px solid ${props => (props.isError ? '#d73737' : ' white')};
	background: #f7f8fd;
	border-radius: 5px;
	margin-top: 15px;
	padding: 15px;
	color: #3a4374;
	width: 100%;
	outline: none;
	&:focus {
		outline: 1px solid #4661e6;
	}
`
export const TextArea = styled(TextField)`
	border: 1px solid ${props => (props.isError ? '#d73737' : ' white')};
	resize: none;
`

export const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	background: #f2f2f2;
	display: flex;
	justify-content: center;
`

export const ContainerForm = styled.div`
	width: 90%;
	max-width: 540px;
	margin: auto;
	margin-bottom: 80px;
	@media (min-width: 700px) {
		margin-bottom: 100px;
	}
`

export const GoBackBtn = styled.button`
	border: none;
	color: #647196;
	margin-top: 25px;
	.icon-back {
		margin-right: 10px;
	}
	@media (min-width: 700px) {
		margin-top: 50px;
	}
	transition: all 0.2s ease-in-out;
	&:hover {
		color: #ad1fea;
		text-decoration: underline;
	}
`
export const Form = styled.form`
	box-shadow: 0px 2px 10px #8080805c;
	margin-top: 55px;
	border-radius: 10px;
	background-color: white;
	padding: 24px;
	padding-top: 0px;
	.title-form {
		font-weight: bold;
		font-size: 18px;
		color: #3a4374;
	}
	.icon-form {
		width: 40px;
		height: 40px;
		position: relative;
		top: -21px;
	}
`

export const AddBtnForm = styled.button`
	font-size: 14px;
	padding: 10px 25px;
	font-weight: bold;
	border-radius: 10px;
	background-color: #ad1fea;
	margin-bottom: 10px;
	color: white;
	border: none;
	width: 100%;
	@media (min-width: 700px) {
		width: auto;
		margin-left: 10px;
	}
`

export const CancelBtn = styled(Link)`
	font-size: 14px;
	padding: 10px 25px;
	font-weight: bold;
	border-radius: 10px;
	margin-bottom: 10px;
	color: white;
	border: none;
	text-align: center;
	text-decoration: none;
	width: 100%;
	background-color: #3a4374;
	@media (min-width: 700px) {
		width: auto;
		margin-left: 10px;
	}
`

export const DeleteBtn = styled(AddBtnForm)`
	justify-self: start;
	background-color: #d73737;
	@media (min-width: 700px) {
		margin-left: 0px;
		position: absolute;
		left: 0px;
	}
`

export const ButtonsForm = styled.div`
	display: flex;
	margin-top: 32px;
	flex-wrap: wrap;
	justify-content: end;
	flex-direction: row-reverse;
	position: relative;
`

export const ErrorForm = styled.p`
	color: #d73737;
`
