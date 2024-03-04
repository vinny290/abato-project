import { InputHTMLAttributes } from 'react'

export interface InputRegProps extends InputHTMLAttributes<HTMLInputElement> {
	isValid?: boolean
}
