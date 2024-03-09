import { MultiSelect } from '@mantine/core'
import styles from './InputFiltr.module.css'

export function InputFltr() {
	return (
		<div className={styles['input']}>
			<MultiSelect
				placeholder='Марка'
				data={['Audi', 'BMW', 'Mercedes', 'Volvo']}
				searchable
				nothingFoundMessage='Нет совпадений...'
			/>
		</div>
	)
}
