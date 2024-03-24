import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonChooseProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	width: string
	height?: 'mobile' | 'base'
	color?: 'active' | 'no-active'
	children: ReactNode
}
