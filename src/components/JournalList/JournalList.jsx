import { useContext, useMemo } from 'react'

import CardButton from '../CardButton/CardButton'
import JournalItem from '../JournalItem/JournalItem'
import './JournalList.css'
import { UserContext } from '../../context/user-context'

function JournalList({ itemsList }) {
	const { userId } = useContext(UserContext)

	const sortItems = (a, b) => {
		if (a.date < b.date) {
			return 1
		} else {
			return -1
		}
	}

	const filteredItems = useMemo(
		() => itemsList.filter((el) => el.userId === userId).sort(sortItems),
		[itemsList, userId]
	) // useMemo используем, когда нет необходимости вычислять результат, который не зависит от пропсов, не участвующих в работе вычислений

	if (itemsList.length === 0) {
		return <p>Записи отсутствуют, добавьте первую запись</p>
	}

	if (itemsList.filter((el) => el.userId === userId).length === 0) {
		return <p>Текущий пользователь еще не оставил записи</p>
	}

	return (
		<div className='journal-list'>
			{' '}
			{filteredItems.map((el) => (
				<CardButton key={el.id}>
					<JournalItem title={el.title} date={el.date} post={el.post} />
				</CardButton>
			))}
		</div>
	)
}

export default JournalList
