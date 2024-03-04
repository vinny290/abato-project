/* eslint-disable @typescript-eslint/no-unused-vars */
import cn from 'classnames'
import { forwardRef } from 'react'
import styles from './InputReg.module.css'
import { InputRegProps } from './InputReg.props'

const InputReg = forwardRef<HTMLInputElement, InputRegProps>(function InputReg(
	{ isValid = true, className, ...props },
	ref
) {
	// Регулярное выражение для проверки формата телефонного номера
	const phoneRegex = /^\+[1-9]\d{1,14}$/

	// Функция для проверки валидности номера
	const validatePhone = (value: string): boolean => {
		return phoneRegex.test(value)
	}

	// Обработчик изменения значения в инпуте
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		let { value } = event.target
		// Удаляем все символы, кроме цифр
		value = value.replace(/\D/g, '')
		event.target.value = value
		const isValidPhone = validatePhone(value)
		// Вызов функции обратного вызова, если она передана
		if (props.onChange) {
			props.onChange(event)
		}
	}

	return (
		<input
			ref={ref}
			className={cn(styles['input'], className, {
				[styles['invalid']]: !isValid,
			})}
			onChange={handleChange} // Добавляем обработчик изменения значения
			inputMode='numeric' // Разрешаем ввод только цифр
			maxLength={11}
			{...props}
		/>
	)
})

export default InputReg
