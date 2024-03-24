import cn from "classnames";
import React, { useState } from "react";
import ButtonChoose from "../../shared/ui/legacy_components/ButtonChoose/ButtonChoose";
import styles from "./ChoseModule.module.scss";
import { ChooseModuleProps } from "./ChoseModule.props";

export default function ChooseModule({
  width,
  height = "base",
  options, // Передаются переменные для создания кнопок
}: ChooseModuleProps) {
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
        [styles["base"]]: height === "base",
        [styles["mobile"]]: height === "mobile",
      })}
    >
      {/* Динамически генерируем кнопки на основе переданных переменных */}
      {options.map((option) => (
        <ButtonChoose
          key={option} // Важно добавить уникальный ключ для каждой кнопки
          width={`${100 / options.length}%`} // Распределение равномерно по ширине
          color={selectedButton === option ? "active" : "no-active"}
          onClick={() => handleButtonClick(option)}
        >
          {option}
        </ButtonChoose>
      ))}
    </div>
  );
}
