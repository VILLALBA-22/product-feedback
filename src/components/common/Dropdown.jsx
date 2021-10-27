import { Controller } from 'react-hook-form'
import Select from 'react-select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const Option = styled.div`
	display: flex;
	font-size: 16px;
	justify-content: space-between;
	align-items: center;
	padding: 15px 20px;
	color: ${props => (props.color ? '#AD1FEA' : '#647196')};
	border-top: 1px solid #3a437438;
	&:hover {
		color: #ad1fea;
	}
`
const CustomOption = ({ innerProps, isSelected, data }) => {
	return isSelected ? (
		<Option {...innerProps} color>
			<span>{data.label}</span> <FontAwesomeIcon icon={faCheck} />
		</Option>
	) : (
		<Option {...innerProps}>
			<span>{data.label}</span>
		</Option>
	)
}
const customStyles = {
	dropdownIndicator: (provided, state) => ({
		...provided,
		transition: 'all 0.5s ease-in-out',
		transform: state.isFocused ? 'rotate(180deg)' : '0px',
		color: '#3A4374',
	}),
	option: (provided, state) => ({
		...provided,
		cursor: 'pointer',
		color: state.isSelected ? '#AD1FEA' : '#647196',
		background: 'none',
		padding: '10px 15px',
		'&:hover': {
			color: '#AD1FEA',
		},
	}),
	indicatorSeparator: () => ({
		display: 'none',
	}),
	menu: provided => ({
		...provided,
		boxShadow: '0px 4px 9px 0px grey',
	}),
	menuList: provided => ({
		...provided,
		padding: '0px',
	}),
	munu: provided => ({
		...provided,
		'&:first-child': {
			background: 'transparent !important',
		},
	}),
	control: (provided, state) => ({
		...provided,
		padding: ' 3px 6px',
		fontSize: '14px',
		borderColor: state.isFocused ? '#f7f8fd' : 'white',
		background: '#f7f8fd',
		borderRadius: '5px',
	}),
	container: provided => ({
		...provided,
		marginTop: '14px',
	}),
	placeholder: provided => ({
		...provided,
		color: '#3A4374',
		fontSize: '13px',
	}),
}

function Dropdown({ name, control, placeholder, options, rules, setValue }) {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<Select
					placeholder={placeholder}
					{...field}
					styles={customStyles}
					isSearchable={false}
					options={options}
					components={{ Option: CustomOption }}
				/>
			)}
			rules={rules}
		/>
	)
}

export default Dropdown
