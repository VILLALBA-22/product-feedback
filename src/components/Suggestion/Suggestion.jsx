import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CustomLink = styled(Link)`
	text-decoration: none;
`
const SuggestionElement = styled.div`
	background: white;
	margin-bottom: 26px;
	padding: 25px;
	border-radius: 10px;
	font-size: 13px;
	box-shadow: 0px 2px 10px #8080805c;
	transition: all 0.2s ease-in-out;
	&:hover {
		transform: translateY(-2px);
	}
`
const TitleSuggestion = styled.h3`
	color: #3a4374;
	margin-bottom: 9px;
	font-weight: bold;
`
const TextSuggestions = styled.p`
	font-weight: normal;
	margin-bottom: 8px;
	color: #647196;
`
const TagSuggestions = styled.p`
	background-color: #f2f4ff;
	color: #4661e6;
	padding: 7px 15px;
	border-radius: 9px;
	font-weight: 600;
	display: inline-block;
`

export default function Suggestion({ sug }) {
	return (
		<CustomLink to={`/edit-feedback/${sug.id}`}>
			<SuggestionElement>
				<TitleSuggestion>{sug.title}</TitleSuggestion>
				<TextSuggestions>{sug.description}</TextSuggestions>
				<TagSuggestions>{sug.category.label}</TagSuggestions>
			</SuggestionElement>
		</CustomLink>
	)
}
