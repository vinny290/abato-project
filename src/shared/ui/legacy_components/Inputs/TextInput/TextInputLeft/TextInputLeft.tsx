import cn from 'classnames'
import styles from './TextInputLeft.module.css'
import { TextInputLeftProps } from './TextInputLeft.props'
export default function TextInputLeft({ ...props }: TextInputLeftProps) {
	// Обработчик изменения значения в инпуте
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		let { value } = event.target
		// Удаляем все символы, кроме цифр
		value = value.replace(/\D/g, '')
		event.target.value = value
		// Вызываем функцию обратного вызова, если она передана
		if (props.onChange) {
			props.onChange(event)
		}
	}
	return (
		<input className={cn(styles['input'])} onChange={handleChange} {...props} />
	)
}
