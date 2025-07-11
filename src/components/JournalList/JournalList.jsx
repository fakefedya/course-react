import { useContext } from 'react'

import CardButton from '../CardButton/CardButton'
import JournalItem from '../JournalItem/JournalItem'
import './JournalList.css'
import { UserContext } from '../../context/user-context'

function JournalList({ itemsList }) {
	const { userId } = useContext(UserContext)

	if (itemsList.length === 0) {
		return <p>Записи отсутствуют, добавьте первую запись</p>
	}

	if (itemsList.filter((el) => el.userId === userId).length === 0) {
		return <p>Текущий пользователь еще не оставил записи</p>
	}

	const sortItems = (a, b) => {
		if (a.date < b.date) {
			return 1
		} else {
			return -1
		}
	}

	return (
		<div className='journal-list'>
			{' '}
			{itemsList
				.filter((el) => el.userId === userId)
				.sort(sortItems)
				.map((el) => (
					<CardButton key={el.id}>
						<JournalItem title={el.title} date={el.date} post={el.post} />
					</CardButton>
				))}
		</div>
	)
}

export default JournalList
