import './App.css'
import Header from './components/Header/Header'
import JournalAddButton from './components/JournalAddButton/JournalAddButton'
import JournalForm from './components/JournalForm/JournalForm'
import JournalList from './components/JournalList/JournalList'
import Body from './layout/Body/Body'
import LeftPanel from './layout/LeftPanel/LeftPanel'
import { useLocalStorage } from './hooks/use-localstorage.jook'
import { UserContextProvider } from './context/user-context'
import { useState } from 'react'

function mapItems(items) {
	if (!items) {
		return []
	}
	return items.map((i) => ({
		...i,
		date: new Date(i.date),
	}))
}

function App() {
	const [items, setItems] = useLocalStorage(['data'])
	const [selectedItem, setSelectedItem] = useState({})

	const addItem = (item) => {
		if (!item.id) {
			setItems([
				...mapItems(items),
				{
					...item,
					userId: item.userId,
					date: new Date(item.date),
					id: items.length > 0 ? Math.max(...items.map((i) => i.id)) + 1 : 1,
				},
			])
		} else {
			setItems([
				...mapItems(items).map((i) => {
					if (i.id === item.id) {
						return {
							...item,
						}
					}
					return i
				}),
			])
		}
	}

	return (
		<UserContextProvider>
			<div className='app'>
				<LeftPanel>
					<Header />
					<JournalAddButton />
					<JournalList itemsList={mapItems(items)} setItem={setSelectedItem} />
				</LeftPanel>
				<Body>
					<JournalForm onSubmit={addItem} data={selectedItem} />
				</Body>
			</div>
		</UserContextProvider>
	)
}

export default App
