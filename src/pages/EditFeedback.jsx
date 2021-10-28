import React from 'react'
import Dropdown from '../components/common/Dropdown'
import { useForm } from 'react-hook-form'
import { Link, useParams, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteSuggestion, updateSuggestion } from '../store/actions'
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
	AddBtnForm,
	DeleteBtn,
	ErrorForm,
} from '../components/common/Form'

const optionsCategories = [
	{ value: 'feature', label: 'Feature' },
	{ value: 'ui', label: 'UI' },
	{ value: 'ux', label: 'UX' },
	{ value: 'enhancement', label: 'Enhancement' },
	{ value: 'bug', label: 'Bug' },
]

const optionsStatus = [
	{ value: 'suggestion', label: 'Suggestion' },
	{ value: 'planned', label: 'Planned' },
	{ value: 'in-progress', label: 'In-Progress' },
	{ value: 'live', label: 'Live' },
]

function EditFeedback({ suggestions, deleteSuggestion, updateSuggestion }) {
	let { id } = useParams()
	let history = useHistory()
	id = parseInt(id)
	let currentSuggestion = suggestions.filter(sug => id === sug.id)
	currentSuggestion = currentSuggestion[0]
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({ mode: 'onTouched' })
	const handleDelete = id => {
		deleteSuggestion(id)
		history.push('/')
	}
	const onSubmit = data => {
		data.id = id
		updateSuggestion(data)
		history.push('/')
	}

	return (
		<Container>
			<ContainerForm>
				<Link to='/' style={{ textDecoration: 'none' }}>
					<GoBackBtn>
						<img
							className='icon-back'
							src='../assets/shared/icon-arrow-left.svg'
							alt='go back icon'
						/>
						Go Back
					</GoBackBtn>
				</Link>

				<Form onSubmit={handleSubmit(onSubmit)}>
					<img
						className='icon-form'
						src='../assets/shared/icon-edit-feedback.svg'
						alt='icon add feedback'
					/>
					<h2 className='title-form'>Editing ‘{currentSuggestion.title}’</h2>
					<TitleInput>Feedback Title</TitleInput>
					<DescriptionInput>Add a short, descriptive headline</DescriptionInput>
					<TextField
						{...register('title')}
						defaultValue={currentSuggestion.title}
					/>
					{errors.title && <ErrorForm>Can’t be empty</ErrorForm>}

					<TitleInput>Category</TitleInput>
					<DescriptionInput>
						Choose a category for your feedback.
					</DescriptionInput>
					<Dropdown
						name='category'
						control={control}
						placeholder='Category'
						options={optionsCategories}
						defaultValue={currentSuggestion.category}
					/>
					<TitleInput>Update Status</TitleInput>
					<DescriptionInput>Change feature state </DescriptionInput>
					<Dropdown
						name='status'
						control={control}
						options={optionsStatus}
						defaultValue={currentSuggestion.status}
					/>
					<TitleInput>Feedback Detail</TitleInput>
					<DescriptionInput>
						Include any specific comments on what should be improved, added,
						etc.
					</DescriptionInput>
					<TextArea
						{...register('description')}
						rows='3'
						as='textarea'
						defaultValue={currentSuggestion.description}
					/>
					{errors.description && <ErrorForm>Can’t be empty</ErrorForm>}
					<ButtonsForm>
						<AddBtnForm type='submit' className='separate-button'>
							Update Feedback
						</AddBtnForm>
						<CancelBtn type='button' to='/'>
							Cancel
						</CancelBtn>
						<DeleteBtn type='button' onClick={() => handleDelete(id)}>
							Delete
						</DeleteBtn>
					</ButtonsForm>
				</Form>
			</ContainerForm>
		</Container>
	)
}

const mapStateToProps = state => {
	return {
		suggestions: state.suggestions,
	}
}

const mapDispatchToProps = {
	deleteSuggestion,
	updateSuggestion,
}

export default connect(mapStateToProps, mapDispatchToProps)(EditFeedback)
