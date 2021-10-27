import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import * as Yup from 'yup'
import styled from 'styled-components'
import Select from 'react-select'

const Option = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 15px 20px;
	color: ${props => (props.color ? '#AD1FEA' : '#647196')};
	&:hover {
		color: #ad1fea;
	}
	border-top: ${props => (props.first ? 'none' : '1px solid #979797')};
`

const CustomOption = ({ innerProps, isSelected, data }) => {
	return isSelected ? (
		data.value === 'chocolate' ? (
			<Option {...innerProps} color first>
				<span>{data.label}</span> <span> test</span>
			</Option>
		) : (
			<Option {...innerProps} color>
				<span>{data.label}</span> <span> test</span>
			</Option>
		)
	) : data.value === 'chocolate' ? (
		<Option {...innerProps} first>
			{data.label}
		</Option>
	) : (
		<Option {...innerProps}>{data.label}</Option>
	)
}

const customStyles = {
	dropdownIndicator: (provided, state) => ({
		...provided,
		transition: 'all 0.5s ease-in-out',
		transform: state.isFocused ? 'rotate(180deg)' : '0px',
	}),
	option: (provided, state) => ({
		...provided,
		color: state.isSelected ? '#AD1FEA' : '#647196',
		background: 'none',
		padding: '10px 15px',
		'&:hover': {
			color: '#AD1FEA',
		},
	}),
	indicatorSeparator: (provided, state) => ({
		display: 'none',
	}),
	menu: (provided, state) => ({
		...provided,
		boxShadow: '0px 4px 9px 0px grey',
	}),
	menuList: (provided, state) => ({
		...provided,
		padding: '0px',
	}),
}

function Home() {
	const {
		register,
		handleSubmit,
		watch,
		control,
		formState: { errors },
	} = useForm({ mode: 'onTouched' })
	const onSubmit = data => console.log(data)

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input defaultValue='test' {...register('example')} />
			<br />
			<input {...register('exampleRequired', { required: true })} />
			{errors.exampleRequired && <span>This field is required</span>}
			<br />
			<Controller
				name='iceCreamType'
				control={control}
				render={({ field }) => (
					<Select
						placeholder='mi select'
						{...field}
						styles={customStyles}
						isSearchable={false}
						options={[
							{ value: 'chocolate', label: 'Chocolate' },
							{ value: 'strawberry', label: 'Strawberry' },
							{ value: 'vanilla', label: 'Vanilla' },
						]}
						components={{ Option: CustomOption }}
					/>
				)}
				rules={{ required: 'You have to select a value' }}
			/>
			{errors.iceCreamType && errors.iceCreamType.message}

			<br />

			<input type='submit' />
		</form>
	)
}

export default Home
