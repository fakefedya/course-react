import './App.css'
import Button from './components/Button/Button'
import CardButton from './components/CardButton/CardButton'
import JournalItem from './components/JournalItem/JournalItem'

function App() {
	const data = [
		{
			title: 'Подготовка к обновлению курсов',
			date: new Date(),
			text: 'Горные походы открывают удивительные природные ландшафты',
		},
		{
			title: 'Поход в годы',
			date: new Date(),
			text: 'Думал, что очень много времени займет придумать этот текст',
		},
	]

	return (
		<>
			<h1>Какой-то заголовок</h1>
			<p>Какой-то текст</p>
			<Button />
			<CardButton>Новое воспоминание</CardButton>
			<CardButton>
				<JournalItem
					title={data[0].title}
					date={data[0].date}
					text={data[0].text}
				/>
			</CardButton>
			<CardButton>
				<JournalItem
					title={data[1].title}
					date={data[1].date}
					text={data[1].text}
				/>
			</CardButton>
		</>
	)
}

export default App
