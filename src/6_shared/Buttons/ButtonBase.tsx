/* eslint-disable react/prop-types */
import cn from 'classnames'
import styles from './ButtonBase.module.scss'
import { ButtonBaseProps } from './ButtonBase.props'

const ButtonBase: React.FC<ButtonBaseProps> = ({
	width,
	height = 'base',
	color = 'primary',
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
				[styles['primary']]: color === 'primary',
				[styles['secondary']]: color === 'secondary',
				[styles['base']]: height === 'base',
				[styles['mobile']]: height === 'mobile',
			})}
			{...props}
		>
			{children}
		</button>
	)
}

export default ButtonBase
