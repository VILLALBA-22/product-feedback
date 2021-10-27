import React from 'react'
import Dropdown from '../components/common/Dropdown'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
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

export default function EditFeedback() {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({ mode: 'onTouched' })
	const onSubmit = data => console.log(data)

	return (
		<Container>
			<ContainerForm>
				<Link to='/' style={{ textDecoration: 'none' }}>
					<GoBackBtn>
						<img
							className='icon-back'
							src='./assets/shared/icon-arrow-left.svg'
							alt='go back icon'
						/>
						Go Back
					</GoBackBtn>
				</Link>

				<Form onSubmit={handleSubmit(onSubmit)}>
					<img
						className='icon-form'
						src='./assets/shared/icon-edit-feedback.svg'
						alt='icon add feedback'
					/>
					<h2 className='title-form'>Editing ‘Add a dark theme option’</h2>
					<TitleInput>Feedback Title</TitleInput>
					<DescriptionInput>Add a short, descriptive headline</DescriptionInput>
					<TextField {...register('feedbackTitle')} />
					<TitleInput>Category</TitleInput>
					<DescriptionInput>
						Choose a category for your feedback.
					</DescriptionInput>
					<Dropdown
						name='category'
						control={control}
						placeholder='Category'
						options={optionsCategories}
					/>
					<TitleInput>Update Status</TitleInput>
					<DescriptionInput>Change feature state </DescriptionInput>
					<Dropdown
						name='status'
						control={control}
						placeholder='Status'
						options={optionsStatus}
					/>
					<TitleInput>Feedback Detail</TitleInput>
					<DescriptionInput>
						Include any specific comments on what should be improved, added,
						etc.
					</DescriptionInput>
					<TextArea {...register('feedbackDetails')} rows='3' as='textarea' />
					<ButtonsForm>
						<AddBtnForm type='submit' className='separate-button'>
							Add Feedback
						</AddBtnForm>
						<CancelBtn type='button' onClick={() => console.log('Test')}>
							Cancel
						</CancelBtn>
						<DeleteBtn type='button'>Delete</DeleteBtn>
					</ButtonsForm>
				</Form>
			</ContainerForm>
		</Container>
	)
}
