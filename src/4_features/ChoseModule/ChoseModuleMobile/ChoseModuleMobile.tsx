/* eslint-disable @typescript-eslint/no-unused-vars */
import cn from 'classnames'
import ButtonChoose from '../../../6_shared/ButtonChoose/ButtonChoose'
import styles from './ChoseModuleMobile.module.scss'
import { ChooseModuleMobileProps } from './ChoseModuleMobile.props'
export default function ChooseModuleMobile({
	width,
	height = 'mobile',
}: ChooseModuleMobileProps) {
	const chooseModuleStyles: React.CSSProperties = {
		width,
	}
	return (
		<div
			style={chooseModuleStyles}
			className={cn(styles['container'], {
				[styles['mobile']]: height === 'mobile',
			})}
		>
			<ButtonChoose width='52px' height='mobile'>
				Все
			</ButtonChoose>
			<ButtonChoose width='60px' height='mobile' color='no-active'>
				Новые
			</ButtonChoose>
			<ButtonChoose width='100px' height='mobile' color='no-active'>
				С пробегом
			</ButtonChoose>
		</div>
	)
}
