import cn from "classnames";
import styles from "./TextInputRight.module.css";
import { TextInputRightProps } from "./TextInputRight.props";

export default function TextInputRight({ ...props }: TextInputRightProps) {
  // Обработчик изменения значения в инпуте
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = event.target;
    // Удаляем все символы, кроме цифр
    value = value.replace(/\D/g, "");
    event.target.value = value;
    // Вызываем функцию обратного вызова, если она передана
    if (props.onChange) {
      props.onChange(event);
    }
  };

  return (
    <input className={cn(styles["input"])} onChange={handleChange} {...props} />
  );
}
