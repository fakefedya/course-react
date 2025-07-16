import { memo } from 'react'
import './Button.css'

function Button({ children, className, onClick }) {
	const cl = 'button' + (className ? ' ' + className : '')
	return (
		<button className={cl} onClick={onClick}>
			{children}
		</button>
	)
}

export default memo(Button)
