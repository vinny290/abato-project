/* eslint-disable react/jsx-key */
import cn from 'classnames'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import ButtonBase from '../../../6_shared/Buttons/ButtonBase'
import styles from './Modal.module.scss'

export default function Modal({ items }: ModalProps) {
	const [menuActive, setMenuActive] = useState(false)
	return (
		<>
			<div
				className={cn(styles['modal'], {
					[styles.active]: menuActive,
					[styles.blur]: menuActive,
				})}
			>
				<div
					className={cn(styles['modal-close'])}
					onClick={() => setMenuActive(!menuActive)}
				>
					<AiOutlineClose size={20} />
				</div>
				<div className={cn(styles['modal-content'])}>
					<ul className={cn(styles['menu'])}>
						<li className={cn(styles['menu-account'])}>
							<img
								className={cn(styles['menu-account-img'])}
								src='../../../../public/accaunt.svg'
								alt=''
							/>
							<ButtonBase width='61px' height='mobile'>
								Вход
							</ButtonBase>
						</li>
						{items.map(item => (
							<li className={cn(styles['menu-list'])}>
								<img
									className={cn(styles['menu-list-img'])}
									src={item.icon}
									alt={item.value}
								/>
								<a className={cn(styles['menu-list-a'])} href={item.href}>
									{item.value}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>

			<div
				onClick={() => setMenuActive(!menuActive)}
				className={cn(styles['mobile_btn'])}
			>
				{menuActive ? (
					<AiOutlineClose size={25} />
				) : (
					<AiOutlineMenu size={25} />
				)}
			</div>
		</>
	)
}
