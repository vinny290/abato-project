import cn from 'classnames'
import styles from './BasicCard.module.scss'
import { BasicCardProps } from './BasicCard.props'

export default function BasicCard({
	title,
	year,
	mileage,
	price,
	image,
}: BasicCardProps) {
	return (
		<div className={cn(styles['card'])}>
			<div className={cn(styles['image'])}>
				<img className={cn(styles['img'])} src={image} alt='car' />
			</div>
			<div className={cn(styles['content'])}>
				<div className={cn(styles['content1'])}>
					<div className={cn(styles['title'])}>
						<span>{title}</span>
					</div>
					<div className={cn(styles['location'])}>
						<div>
							<img src='../../../public/map.svg' alt='map' />
							<span>Moscow</span>
						</div>
					</div>
					<div className={cn(styles['size-block'])}>
						<div className={cn(styles['description'])}>
							1.5 л/123 л.с/Бензин
						</div>
						<div className={cn(styles['description'])}>Механика</div>
						<div className={cn(styles['description'])}>Седан 5 дв.</div>
						<div className={cn(styles['description'])}>Передний</div>
						<div className={cn(styles['description'])}>Серый</div>
					</div>
				</div>
				<div className={cn(styles['content2'])}>
					<div className={cn(styles['mileage'])}>
						<span>{mileage} км</span>
					</div>
					<div className={cn(styles['year'])}>
						<span>{year} г</span>
					</div>
				</div>
				<div className={cn(styles['content3'])}>
					<div className={cn(styles['price'])}>
						<span>{price} ₽</span>
					</div>
					<div className={cn(styles['actions'])}>
						<div className={cn(styles['like'])}>
							<img
								src='../../../public/like.svg'
								alt='like'
								title='В избранное'
							/>
						</div>
						<div className={cn(styles['compare'])}>
							<img
								src='../../../public/compare.svg'
								alt='compare'
								title='В сравнение'
							/>
						</div>
						<span className={cn(styles['date'])}>17 августа 2022</span>
					</div>
				</div>
			</div>
		</div>
	)
}
