import { InputHTMLAttributes } from 'react'

export interface InputRegProps extends InputHTMLAttributes<HTMLInputElement> {
	isValid?: boolean
	className?: string
	placeholder: string // Make placeholder mandatory
	type?: string // Add type prop
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}
