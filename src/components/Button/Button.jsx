import './Button.css'

function Button({ text, className, onClick }) {
	const cl = 'button' + (className ? ' ' + className : '')
	return (
		<button className={cl} onClick={onClick}>
			{text}
		</button>
	)
}

export default Button
