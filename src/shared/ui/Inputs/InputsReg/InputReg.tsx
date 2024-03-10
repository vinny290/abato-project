/* eslint-disable @typescript-eslint/no-unused-vars */
import cn from 'classnames'
import { forwardRef, useState } from 'react'
import styles from './InputReg.module.css'
import { InputRegProps } from './InputReg.props'

const InputReg = forwardRef<HTMLInputElement, InputRegProps>(function InputReg(
	{ isValid = true, className, placeholder, type = 'text', ...props },
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
		// Если тип ввода password, то не удаляем символы
		if (type !== 'password') {
			// Удаляем все символы, кроме цифр
			value = value.replace(/\D/g, '')
		}
		event.target.value = value
		const isValidPhone = validatePhone(value)
		// Вызов функции обратного вызова, если она передана
		if (props.onChange) {
			props.onChange(event)
		}
	}

	const [isPasswordVisible, setPasswordVisibility] = useState(false)

	const togglePasswordVisibility = () => {
		setPasswordVisibility(!isPasswordVisible)
	}

	return (
		<div className={styles['input-container']}>
			<input
				ref={ref}
				className={cn(styles['input'], className, {
					[styles['invalid']]: !isValid,
				})}
				onChange={handleChange} // Добавляем обработчик изменения значения
				inputMode={type === 'password' ? 'text' : 'numeric'} // Allow letters and numbers for password input
				maxLength={type === 'password' ? undefined : 11}
				placeholder={placeholder} // Make placeholder mandatory
				type={isPasswordVisible ? 'text' : type} // Toggle password visibility
				{...props}
			/>
			{type === 'password' && (
				<div
					className={cn(styles['eye-icon'], {
						[styles['visible']]: isPasswordVisible,
					})}
					onClick={togglePasswordVisibility}
				>
					<img
						src={
							isPasswordVisible
								? '../../../../public/eye-open.svg'
								: '../../../../public/eye-close.svg'
						}
						alt='Toggle Password Visibility'
					/>
				</div>
			)}
		</div>
	)
})

export default InputReg
