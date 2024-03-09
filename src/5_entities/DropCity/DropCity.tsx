import { Menu } from '@mantine/core'
import cn from 'classnames'
import { useState } from 'react'
import styles from './DropCity.module.scss'
import { City } from './DropCity.props'

export function DropCity() {
	const initialCities: City[] = [
		{ id: 1, name: 'Сухум' },
		{ id: 2, name: 'Гагра' },
		{ id: 3, name: 'Гудаута' },
		{ id: 4, name: 'Гали' },
		{ id: 5, name: 'Очамчира' },
		{ id: 7, name: 'Ткварчели' },
		{ id: 8, name: 'Пицунда' },
		{ id: 9, name: 'Новый Афон' },
	]
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [selectedCity, setSelectedCity] = useState<City>(initialCities[0])
	const [cities, setCities] = useState<City[]>(initialCities)

	const toggleDropdown = () => {
		setIsOpen(!isOpen)
	}

	const handleCitySelect = (city: City) => {
		setSelectedCity(city)
		setIsOpen(false) // Закрываем список при выборе города

		// Перемещаем выбранный город в начало списка
		setCities(prevCities => {
			const updatedCities = prevCities.filter(item => item.id !== city.id) // Удаляем выбранный город из массива
			return [city, ...updatedCities] // Добавляем выбранный город в начало массива
		})
	}

	return (
		<Menu width={200} shadow='md'>
			<Menu.Target>
				<div className={styles.selectedCity} onClick={toggleDropdown}>
					<img src='/map.svg' alt='map' />
					<span className={styles.whiteText}>{selectedCity.name}</span>
				</div>
			</Menu.Target>

			<Menu.Dropdown className={cn(styles['dropdown'])}>
				{isOpen && (
					<div className={styles.cityList}>
						{cities.map(city => (
							<Menu.Item
								component='a'
								className={cn(styles.cityItem, {
									[styles.selectedCity]: city.id === selectedCity.id,
								})}
								key={city.id}
								onClick={() => handleCitySelect(city)}
							>
								{city.name}
							</Menu.Item>
						))}
					</div>
				)}
			</Menu.Dropdown>
		</Menu>
	)
}
