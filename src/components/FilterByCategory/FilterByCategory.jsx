import React from 'react'
import styled from 'styled-components'

const ContainerCategories = styled.div`
	padding: 24px;
	padding-right: 15px;

	background-color: white;
	display: flex;
	flex-wrap: wrap;
`

const Category = styled.button`
	background-color: #f2f4ff;
	color: #4661e6;
	border-radius: 7px;
	margin-bottom: 15px;
	margin-right: 8px;
	border: none;
	padding: 4px 13px;
	font-weight: 600;
`

export default function FilterByCategory() {
	return (
		<ContainerCategories>
			<Category>All</Category>
			<Category>UI</Category>
			<Category>UX</Category>
			<Category>Enhancement</Category>
			<Category>Bug</Category>
			<Category>Feature</Category>
		</ContainerCategories>
	)
}
