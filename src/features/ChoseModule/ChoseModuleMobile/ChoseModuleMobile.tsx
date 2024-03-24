import cn from "classnames";
import { useState } from "react";
import ButtonChoose from "../../../shared/ui/legacy_components/ButtonChoose/ButtonChoose";
import styles from "./ChoseModuleMobile.module.scss";
import { ChooseModuleMobileProps } from "./ChoseModuleMobile.props";

export default function ChooseModuleMobile({
  width,
  height = "mobile",
  options,
}: ChooseModuleMobileProps) {
  const chooseModuleStyles: React.CSSProperties = {
    width,
  };

  const [selectedButton, setSelectedButton] = useState(options[0]); // Устанавливаем первую опцию по умолчанию
  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  return (
    <div
      style={chooseModuleStyles}
      className={cn(styles["container"], {
        [styles["mobile"]]: height === "mobile",
      })}
    >
      {/* Динамически генерируем кнопки на основе переданных переменных */}
      {options.map((option) => (
        <ButtonChoose
          key={option} // Важно добавить уникальный ключ для каждой кнопки
          width={`${100 / options.length}%`} // Распределение равномерно по ширине
          height="mobile"
          color={selectedButton === option ? "active" : "no-active"}
          onClick={() => handleButtonClick(option)}
        >
          {option}
        </ButtonChoose>
      ))}
    </div>
  );
}
