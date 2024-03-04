import TextInputLeft from './TextInputLeft/TextInputLeft'
import TextInputRight from './TextInputRight/TextInputRight'

export default function TextInputLR() {
	return (
		<>
			<TextInputLeft
				inputMode='numeric' // Разрешаем ввод только цифр
				maxLength={8}
				placeholder='Цена от'
			/>
			<TextInputRight
				inputMode='numeric' // Разрешаем ввод только цифр
				maxLength={8}
				placeholder='до'
			/>
		</>
	)
}
