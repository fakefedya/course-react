import { useEffect, useReducer } from 'react'
import Button from '../Button/Button'
import styles from './JournalForm.module.css'
import cn from 'classnames'
import { INITIAL_STATE, formReducer } from './JournalForm.state'

function JournalForm({ onSubmit }) {
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE)
	const { isValid, isFormReadyToSubmit, values } = formState

	useEffect(() => {
		let timerId
		if (!isValid.date || !isValid.post || !isValid.title) {
			timerId = setTimeout(() => {
				console.log('Очистка состояния!')
				dispatchForm({ type: 'CLEAR_FORM' })
			}, 2000)
		}

		// Для предотвращения накопления и конфликта таймеров/интервалов вводится механизм очистки
		return () => {
			clearTimeout(timerId)
		}
	}, [isValid])

	useEffect(() => {
		if (isFormReadyToSubmit) {
			onSubmit(values)
			dispatchForm({ type: 'RESET_FORM' })
		}
	}, [isFormReadyToSubmit])

	const onChange = (e) => {
		dispatchForm({
			type: 'SET_VALUE',
			payload: {
				[e.target.name]: e.target.value,
			},
		})
	}

	const addJournalItem = (e) => {
		e.preventDefault()
		dispatchForm({ type: 'SUBMIT' })
	}

	return (
		<form className={styles['journal-form']} onSubmit={addJournalItem}>
			<div>
				<input
					type='text'
					name='title'
					value={values.title}
					onChange={onChange}
					className={cn(styles['input-title'], {
						[styles['invalid']]: !isValid.title,
					})}
				/>
			</div>
			<div className={styles['form-row']}>
				<label htmlFor='date' className={styles['form-label']}>
					<img src='/calendar.svg' alt='Иконка календаря' />
					<span>Дата</span>
				</label>
				<input
					type='date'
					name='date'
					id='date'
					value={values.date}
					onChange={onChange}
					className={cn(styles['input'], {
						[styles['invalid']]: !isValid.date,
					})}
				/>
			</div>
			<div className={styles['form-row']}>
				<label htmlFor='tag' className={styles['form-label']}>
					<img src='/folder.svg' alt='Иконка папки' />
					<span>Метки</span>
				</label>
				<input
					type='text'
					name='tag'
					id='tag'
					value={values.tag}
					onChange={onChange}
					className={styles['input']}
				/>
			</div>
			<textarea
				name='post'
				cols='30'
				rows='10'
				value={values.post}
				onChange={onChange}
				className={cn(styles['input'], {
					[styles['invalid']]: !isValid.post,
				})}
			></textarea>
			<Button className={'accent'} text='Сохранить' />
		</form>
	)
}

export default JournalForm
