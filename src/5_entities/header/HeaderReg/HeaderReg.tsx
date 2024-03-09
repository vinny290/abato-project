import cn from 'classnames'
import styles from './HeaderReg.module.scss'

export default function HeaderReg() {
	return (
		<header>
			<div className={cn(styles['header'])}>
				<div className={cn(styles['header-container'])}>
					<img
						className={cn(styles['logo'])}
						src='../../../public/logo.svg'
						alt='logo'
					/>
				</div>
			</div>
		</header>
	)
}
