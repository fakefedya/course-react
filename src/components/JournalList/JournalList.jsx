import CardButton from '../CardButton/CardButton'
import JournalItem from '../JournalItem/JournalItem'
import './JournalList.css'

function JournalList({ itemsList }) {
	if (itemsList.length === 0) {
		return <p>Записи отсутствуют, добавьте первую запись</p>
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
			{itemsList.sort(sortItems).map((el) => (
				<CardButton key={el.id}>
					<JournalItem title={el.title} date={el.date} post={el.post} />
				</CardButton>
			))}
		</div>
	)
}

export default JournalList
