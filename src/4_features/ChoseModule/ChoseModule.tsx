/* eslint-disable @typescript-eslint/no-unused-vars */
import cn from 'classnames'
import ButtonChoose from '../../6_shared/ButtonChoose/ButtonChoose'
import styles from './ChoseModule.module.scss'
import { ChooseModuleProps } from './ChoseModule.props'
export default function ChooseModule({
	width,
	height = 'base',
}: ChooseModuleProps) {
	const chooseModuleStyles: React.CSSProperties = {
		width,
	}
	return (
		<div
			style={chooseModuleStyles}
			className={cn(styles['container'], {
				[styles['base']]: height === 'base',
				[styles['mobile']]: height === 'mobile',
			})}
		>
			<ButtonChoose width='98px'>Все</ButtonChoose>
			<ButtonChoose width='98px' color='no-active'>
				Новые
			</ButtonChoose>
			<ButtonChoose width='130px' color='no-active'>
				С пробегом
			</ButtonChoose>
		</div>
	)
}
