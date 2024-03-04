import cn from 'classnames'

import ButtonBase from '../../6_shared/Buttons/ButtonBase'
import { DropCity } from '../DropCity/DropCity'
import Modal from './Modal/Modal'
import styles from './header.module.scss'
export default function Header() {
	const items = [
		{ value: 'Избранное', href: '/main', icon: '../../../public/like.svg' },
		{ value: 'Сравнения', href: '/main', icon: '../../../public/compare.svg' },
		{ value: 'Сообщения', href: '/main', icon: '../../../public/message.svg' },
		{
			value: 'Мои объявления',
			href: '/main',
			icon: '../../../public/add2.svg',
		},
	]
	return (
		<header>
			<div className={cn(styles['header'])}>
				<div className={cn(styles['header-container'])}>
					<div className={cn(styles['header-container-first'])}>
						<img
							className={cn(styles['logo'])}
							src='../../../public/logo.svg'
							alt='logo'
						/>
						<DropCity />
					</div>

					<div className={cn(styles['header-container-second'])}>
						<div className={cn(styles['like-header'])}>
							<img
								src='../../../public/like.svg'
								alt='like'
								style={{ fill: 'white' }}
							/>
							<span>Избранное</span>
						</div>
						<div className={cn(styles['compare-header'])}>
							<img src='../../../public/compare.svg' alt='compare' />
							<span>Сравнить</span>
						</div>
						<ButtonBase width='179px' className={styles.button}>
							Войти
						</ButtonBase>
						<ButtonBase
							width='268px'
							color='secondary'
							className={styles.buttonSec}
						>
							Разместить объявление
						</ButtonBase>
					</div>
				</div>
			</div>
			<Modal items={items} />
		</header>
	)
}
