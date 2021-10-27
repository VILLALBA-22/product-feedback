import React from 'react'
import { useForm } from 'react-hook-form'
import Dropdown from '../components/common/Dropdown'
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
} from '../components/common/Form'

const options = [
	{ value: 'feature', label: 'Feature' },
	{ value: 'ui', label: 'UI' },
	{ value: 'ux', label: 'UX' },
	{ value: 'enhancement', label: 'Enhancement' },
	{ value: 'bug', label: 'Bug' },
]
//selectComponent

export default function NewFeedback() {
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
					<TextField {...register('feedbackTitle')} />
					<TitleInput>Category</TitleInput>
					<DescriptionInput>
						Choose a category for your feedback.
					</DescriptionInput>
					<Dropdown
						name='category'
						control={control}
						placeholder='Category'
						options={options}
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
					</ButtonsForm>
				</Form>
			</ContainerForm>
		</Container>
	)
}
