import './CardButton.css'

function CardButton({ children, className }) {
	const cl = 'card-button' + (className ? ' ' + className : '')
	console.log(className)
	return <button className={cl}>{children}</button>
}

export default CardButton
