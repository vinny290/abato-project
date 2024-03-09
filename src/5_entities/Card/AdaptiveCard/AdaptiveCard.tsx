import cn from 'classnames'
import styles from './AdaptiveCard.module.scss'
import { AdaptiveCardProps } from './AdaptiveCard.props'

export default function AdaptiveCard({
	title,
	year,
	mileage,
	price,
	image,
}: AdaptiveCardProps) {
	return (
		<div className={cn(styles['adaptive-card'])}>
			<div className={cn(styles['image'])}>
				<img className={cn(styles['img'])} src={image} alt='car' />
			</div>
			<div className={cn(styles['content'])}>
				<div className={cn(styles['content1'])}>
					<div className={cn(styles['title'])}>
						<span>{title}</span>
					</div>
					<div className={cn(styles['yearAndMileage'])}>
						<span className={cn(styles['year'])}>{year} г</span>
						<span className={cn(styles['mileage'])}>{mileage} км</span>
					</div>
					<div className={cn(styles['size-block'])}>
						<div className={cn(styles['row'])}>
							<div className={cn(styles['description'])}>Передний</div>
							<div className={cn(styles['description'])}>Механика</div>
						</div>
						<div className={cn(styles['description'])}>
							1.5 л/123 л.с/Бензин
						</div>
					</div>

					<div className={cn(styles['location'])}>
						<span className={cn(styles['address'])}>BorisHof МКАД 44</span>
						<div className={cn(styles['map'])}>
							<img src='../../../public/map.svg' alt='map' />
							<span className={cn(styles['city'])}>Москва, </span>
							<span className={cn(styles['time'])}>3 часа назад</span>
						</div>
					</div>
				</div>
				<div className={cn(styles['content2'])}>
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
					</div>
					<button className={cn(styles['button'])}>Перейти</button>
				</div>
			</div>
		</div>
	)
}
