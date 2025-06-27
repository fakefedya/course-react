import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button'
import CardButton from './components/CardButton/CardButton'
import Header from './components/Header/Header'
import JournalAddButton from './components/JournalAddButton/JournalAddButton'
import JournalForm from './components/JournalForm/JournalForm'
import JournalItem from './components/JournalItem/JournalItem'
import JournalList from './components/JournalList/JournalList'
import Body from './layout/Body/Body'
import LeftPanel from './layout/LeftPanel/LeftPanel'

function App() {
	const INITIAL_DATA = [
		{
			id: 1,
			title: 'Подготовка к обновлению курсов',
			date: new Date(),
			text: 'Горные походы открывают удивительные природные ландшафты',
		},
		{
			id: 2,
			title: 'Поход в годы',
			date: new Date(),
			text: 'Думал, что очень много времени займет придумать этот текст',
		},
	]

	const [items, setItems] = useState(INITIAL_DATA)

	const addItem = (item) => {
		setItems((oldItems) => [
			...oldItems,
			{
				text: item.text,
				title: item.title,
				date: new Date(item.date),
				id: Math.max(...oldItems.map((i) => i.id)) + 1,
			},
		])
	}

	const sortItems = (a, b) => {
		if (a.date < b.date) {
			return 1
		} else {
			return -1
		}
	}

	return (
		<div className='app'>
			<LeftPanel>
				<Header />
				<JournalAddButton />
				<JournalList>
					{items.sort(sortItems).map((el) => (
						<CardButton key={el.id}>
							<JournalItem title={el.title} date={el.date} text={el.text} />
						</CardButton>
					))}
				</JournalList>
			</LeftPanel>
			<Body>
				<JournalForm onSubmit={addItem} />
			</Body>
		</div>
	)
}

export default App
