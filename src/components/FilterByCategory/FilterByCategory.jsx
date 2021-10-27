import React from 'react'
import styled from 'styled-components'

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
	background-color: #f2f4ff;
	color: #4661e6;
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

export default function FilterByCategory({ className }) {
	return (
		<ContainerCategories className={className}>
			<Category>All</Category>
			<Category>UI</Category>
			<Category>UX</Category>
			<Category>Enhancement</Category>
			<Category>Bug</Category>
			<Category>Feature</Category>
		</ContainerCategories>
	)
}
