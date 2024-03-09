import cn from 'classnames'
import styles from './Footer.module.scss'

import './Footer.module.scss'
export default function Footer() {
	const currentYear = new Date().getFullYear()
	return (
		<footer>
			<div className={cn(styles['marks'])}>
				<span className={cn(styles['span'])}>Производители авто: </span>
				<ul className={cn(styles['marks-list'])}>
					<li>
						<a href='#'>Все марки</a>
					</li>
					<li>
						<a href='#'>Тойота</a>
					</li>
					<li>
						<a href='#'>Ниссан</a>
					</li>
					<li>
						<a href='#'>Хонда</a>
					</li>
					<li>
						<a href='#'>Мицубиси</a>
					</li>
					<li>
						<a href='#'>Мазда</a>
					</li>
					<li>
						<a href='#'>Субару</a>
					</li>
					<li>
						<a href='#'>Хендай</a>
					</li>
					<li>
						<a href='#'>Форд</a>
					</li>
					<li>
						<a href='#'>Фольксваген</a>
					</li>
					<li>
						<a href='#'>БМВ</a>
					</li>
					<li>
						<a href='#'>Киа</a>
					</li>
					<li>
						<a href='#'>Лада</a>
					</li>
				</ul>
			</div>
			<div className={cn(styles['columns'])}>
				<div className={cn(styles['column1'])}>
					<ul className={cn(styles['column1-list'])}>
						<li>
							<a href=''>Автомобили</a>
						</li>
						<li>
							<a href=''>Подать объявление</a>
						</li>
						<li>
							<a href=''>Автокаталог</a>
						</li>
					</ul>
				</div>
				<div className={cn(styles['column2'])}>
					<ul className={cn(styles['column2-list'])}>
						<li>
							<a href=''>Отзывы владельцев</a>
						</li>
						<li>
							<a href=''>Договор купли-продажи</a>
						</li>
						<li>
							<a href=''>Размещение на ABATO</a>
						</li>
					</ul>
				</div>
				<div className={cn(styles['column3'])}>
					<ul className={cn(styles['column3-list'])}>
						<li>
							<a href=''>Правовые вопросы</a>
						</li>
						<li>
							<a href=''>Техподдержка</a>
						</li>
						<li>
							<a href=''>Безопасность</a>
						</li>
					</ul>
				</div>
			</div>
			<div className={cn(styles['description'])}>
				<ul className={cn(styles['description-list'])}>
					<li>
						<a href=''>О проекте</a>
					</li>
					<li>
						<a href=''>Помощь</a>
					</li>
					<li>
						<a href=''>Правила</a>
					</li>
					<li>
						<a href=''>Для СМИ</a>
					</li>
				</ul>
			</div>
			<div>
				<span className={cn(styles['year'])}>{currentYear} ABATO</span>
			</div>
		</footer>
	)
}
