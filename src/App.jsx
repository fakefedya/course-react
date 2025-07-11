import './App.css'
import Header from './components/Header/Header'
import JournalAddButton from './components/JournalAddButton/JournalAddButton'
import JournalForm from './components/JournalForm/JournalForm'
import JournalList from './components/JournalList/JournalList'
import Body from './layout/Body/Body'
import LeftPanel from './layout/LeftPanel/LeftPanel'
import { useLocalStorage } from './hooks/use-localstorage.jook'
import { UserContextProvider } from './context/user-context'

function App() {
	const [items, setItems] = useLocalStorage(['data'])

	function mapItems(items) {
		if (!items) {
			return []
		}
		return items.map((i) => ({
			...i,
			date: new Date(i.date),
		}))
	}

	const addItem = (item) => {
		setItems([
			...mapItems(items),
			{
				...item,
				userId: item.userId,
				id: items.length > 0 ? Math.max(...items.map((i) => i.id)) + 1 : 1,
			},
		])
	}

	return (
		<UserContextProvider>
			<div className='app'>
				<LeftPanel>
					<Header />
					<JournalAddButton />
					<JournalList itemsList={mapItems(items)} />
				</LeftPanel>
				<Body>
					<JournalForm onSubmit={addItem} />
				</Body>
			</div>
		</UserContextProvider>
	)
}

export default App
