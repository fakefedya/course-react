import './Button.css'
import { useState } from 'react'

function Button() {
	const [text, setText] = useState('Сохранить')

	const clicked = () => {
		setText('Закрыть')
	}

	return (
		<button onClick={clicked} className='button accent'>
			{text}
		</button>
	)
}

export default Button
