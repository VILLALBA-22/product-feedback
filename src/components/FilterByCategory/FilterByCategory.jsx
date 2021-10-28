import React from 'react'
import styled from 'styled-components'
import { filteredSuggestions } from '../../store/actions'
import { connect } from 'react-redux'

const ContainerCategories = styled.div`
	box-shadow: 0px 2px 10px #8080805c;
	padding: 24px;
	padding-right: 15px;
	border-radius: 10px;
	background-color: white;
	display: flex;
	flex-wrap: wrap;
`

const Category = styled.button`
	background-color: ${props => (props.select ? '#4661e6' : '#f2f4ff')};
	color: ${props => (props.select ? '#f2f4ff' : '#4661e6')};
	border-radius: 7px;
	margin-bottom: 15px;
	margin-right: 8px;
	border: none;
	padding: 4px 13px;
	font-weight: 600;
	transition: all 0.3s ease;
	&:hover {
		background-color: #4661e6;
		color: white;
	}
`
const categories = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature']

function FilterByCategory({ className, filterTag, filteredSuggestions }) {
	const handleClick = event => {
		filteredSuggestions(event.target.textContent)
	}
	return (
		<ContainerCategories className={className}>
			{categories.map(category => {
				if (category === filterTag) {
					return (
						<Category select onClick={handleClick} key={category}>
							{category}
						</Category>
					)
				} else {
					return (
						<Category onClick={handleClick} key={category}>
							{category}
						</Category>
					)
				}
			})}
		</ContainerCategories>
	)
}

const mapStateToProps = state => {
	return {
		filterTag: state.filteredSuggestions,
	}
}

const mapDispatchToProps = {
	filteredSuggestions,
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterByCategory)
