import cn from 'classnames'
import AdaptiveCard from './AdaptiveCard/AdaptiveCard'
import BasicCard from './BasicCard/BasicCard'
import { BasicCardProps } from './BasicCard/BasicCard.props'
import styles from './Card.module.scss'

export default function Card({
	title,
	year,
	mileage,
	price,
	image,
}: BasicCardProps) {
	return (
		<>
			<div className={cn(styles['BasicCard'])}>
				<BasicCard
					title={title}
					year={year}
					mileage={mileage}
					price={price}
					image={image}
				/>
			</div>
			<div className={cn(styles['AdaptiveCard'])}>
				<AdaptiveCard
					title={title}
					year={year}
					mileage={mileage}
					price={price}
					image={image}
				/>
			</div>
		</>
	)
}
