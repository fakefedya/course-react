import Button from '../Button/Button'
import './JournalForm.css'

function JournalForm({ onSubmit }) {
	const addJournalItem = (e) => {
		e.preventDefault()
		const formData = new FormData(e.target)
		const formProps = Object.fromEntries(formData)
		onSubmit(formProps)
		e.target.reset()
	}

	return (
		<form className='journal-form' onSubmit={addJournalItem}>
			<input type='text' name='title' />
			<input type='date' name='date' />
			<input type='text' name='text' />
			<textarea name='text' cols='30' rows='10'></textarea>
			<Button text='Сохранить' />
		</form>
	)
}

export default JournalForm
