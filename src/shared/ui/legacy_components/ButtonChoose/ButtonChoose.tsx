/* eslint-disable react/prop-types */
import cn from 'classnames'
import styles from './ButtonChoose.module.scss'
import { ButtonChooseProps } from './ButtonChoose.props'

const ButtonChoose: React.FC<ButtonChooseProps> = ({
	width,
	height = 'base',
	color = 'active',
	children,
	className,
	...props
}) => {
	const buttonStyles: React.CSSProperties = {
		width,
	}

	return (
		<button
			style={buttonStyles}
			className={cn(styles['button'], className, {
				[styles['active']]: color === 'active',
				[styles['no-active']]: color === 'no-active',
				[styles['base']]: height === 'base',
				[styles['mobile']]: height === 'mobile',
			})}
			{...props}
		>
			{children}
		</button>
	)
}

export default ButtonChoose
