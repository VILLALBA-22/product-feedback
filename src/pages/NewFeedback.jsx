import React from 'react'
import { useForm } from 'react-hook-form'
import Dropdown from '../components/common/Dropdown'
import { Link, useHistory } from 'react-router-dom'
import {
	TitleInput,
	DescriptionInput,
	TextField,
	TextArea,
	Container,
	ContainerForm,
	GoBackBtn,
	Form,
	ButtonsForm,
	CancelBtn,
	ErrorForm,
	AddBtnForm,
} from '../components/common/Form'
import { connect } from 'react-redux'
import { createSuggestion } from '../store/actions'

const options = [
	{ value: 'feature', label: 'Feature' },
	{ value: 'ui', label: 'UI' },
	{ value: 'ux', label: 'UX' },
	{ value: 'enhancement', label: 'Enhancement' },
	{ value: 'bug', label: 'Bug' },
]
//selectComponent

function NewFeedback({ createSuggestion }) {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({ mode: 'onTouched' })
	const history = useHistory()
	const onSubmit = data => {
		let id = Date.now()
		data.id = id
		data.status = { value: 'planned', label: 'Planned' }
		createSuggestion(data)
		history.push('/')
	}

	return (
		<Container>
			<ContainerForm>
				<Link to='/' style={{ textDecoration: 'none' }}>
					<GoBackBtn>
						<img
							className='icon-back'
							src='./assets/shared/icon-arrow-left.svg'
							alt='icon go back'
						/>
						Go Back
					</GoBackBtn>
				</Link>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<img
						className='icon-form'
						src='./assets/shared/icon-new-feedback.svg'
						alt='icon edit feedback'
					/>
					<h2 className='title-form'>Create New Feedback</h2>
					<TitleInput>Feedback Title</TitleInput>
					<DescriptionInput>Add a short, descriptive headline</DescriptionInput>
					<TextField
						{...register('title', { required: true })}
						isError={errors.title}
					/>
					{errors.title && <ErrorForm>Can’t be empty</ErrorForm>}
					<TitleInput>Category</TitleInput>
					<DescriptionInput>
						Choose a category for your feedback.
					</DescriptionInput>
					<Dropdown
						name='category'
						control={control}
						options={options}
						rules={{ required: true }}
						isError={errors.category}
					/>
					<TitleInput>Feedback Detail</TitleInput>
					<DescriptionInput>
						Include any specific comments on what should be improved, added,
						etc.
					</DescriptionInput>
					<TextArea
						{...register('description', { required: true })}
						rows='3'
						as='textarea'
						isError={errors.description}
					/>
					{errors.description && <ErrorForm>Can’t be empty</ErrorForm>}
					<ButtonsForm>
						<AddBtnForm type='submit' className='separate-button'>
							Add Feedback
						</AddBtnForm>
						<CancelBtn type='button' onClick={() => history.push('/')} to='/'>
							Cancel
						</CancelBtn>
					</ButtonsForm>
				</Form>
			</ContainerForm>
		</Container>
	)
}

const mapDispatchToProps = {
	createSuggestion,
}

export default connect(null, mapDispatchToProps)(NewFeedback)
