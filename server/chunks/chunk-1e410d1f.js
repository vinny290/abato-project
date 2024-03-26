import { jsx, jsxs } from "react/jsx-runtime";
import cn from "classnames";
import { useState, forwardRef } from "react";
const button$1 = "_button_1b5ru_1";
const base$2 = "_base_1b5ru_11";
const mobile$2 = "_mobile_1b5ru_15";
const active = "_active_1b5ru_20";
const styles$3 = {
  button: button$1,
  base: base$2,
  mobile: mobile$2,
  active,
  "no-active": "_no-active_1b5ru_27"
};
const ButtonChoose = ({
  width,
  height = "base",
  color = "active",
  children,
  className,
  ...props
}) => {
  const buttonStyles = {
    width
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      style: buttonStyles,
      className: cn(styles$3["button"], className, {
        [styles$3["active"]]: color === "active",
        [styles$3["no-active"]]: color === "no-active",
        [styles$3["base"]]: height === "base",
        [styles$3["mobile"]]: height === "mobile"
      }),
      ...props,
      children
    }
  );
};
const container = "_container_1vcds_1";
const base$1 = "_base_1vcds_10";
const mobile$1 = "_mobile_1vcds_14";
const styles$2 = {
  container,
  base: base$1,
  mobile: mobile$1
};
function ChooseModule({
  width,
  height = "base",
  options
  // Передаются переменные для создания кнопок
}) {
  const chooseModuleStyles = {
    width
  };
  const [selectedButton, setSelectedButton] = useState(options[0]);
  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: chooseModuleStyles,
      className: cn(styles$2["container"], {
        [styles$2["base"]]: height === "base",
        [styles$2["mobile"]]: height === "mobile"
      }),
      children: options.map((option) => /* @__PURE__ */ jsx(
        ButtonChoose,
        {
          width: `${100 / options.length}%`,
          color: selectedButton === option ? "active" : "no-active",
          onClick: () => handleButtonClick(option),
          children: option
        },
        option
      ))
    }
  );
}
const button = "_button_15i09_1";
const base = "_base_15i09_11";
const mobile = "_mobile_15i09_15";
const primary = "_primary_15i09_20";
const secondary = "_secondary_15i09_27";
const styles$1 = {
  button,
  base,
  mobile,
  primary,
  secondary
};
const ButtonBase = ({
  width,
  height = "base",
  color = "primary",
  children,
  className,
  ...props
}) => {
  const buttonStyles = {
    width
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      style: buttonStyles,
      className: cn(styles$1["button"], className, {
        [styles$1["primary"]]: color === "primary",
        [styles$1["secondary"]]: color === "secondary",
        [styles$1["base"]]: height === "base",
        [styles$1["mobile"]]: height === "mobile"
      }),
      ...props,
      children
    }
  );
};
const input = "_input_s7pph_1";
const styles = {
  input,
  "input-container": "_input-container_s7pph_9",
  "eye-icon": "_eye-icon_s7pph_12"
};
const InputReg = forwardRef(function InputReg2({ isValid = true, className, placeholder, type = "text", ...props }, ref) {
  const handleChange = (event) => {
    let { value } = event.target;
    if (type !== "password") {
      value = value.replace(/\D/g, "");
    }
    event.target.value = value;
    if (props.onChange) {
      props.onChange(event);
    }
  };
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };
  return /* @__PURE__ */ jsxs("div", { className: styles["input-container"], children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        ref,
        className: cn(styles["input"], className, {
          [styles["invalid"]]: !isValid
        }),
        onChange: handleChange,
        inputMode: type === "password" ? "text" : "numeric",
        maxLength: type === "password" ? void 0 : 11,
        placeholder,
        type: isPasswordVisible ? "text" : type,
        ...props
      }
    ),
    type === "password" && /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(styles["eye-icon"], {
          [styles["visible"]]: isPasswordVisible
        }),
        onClick: togglePasswordVisibility,
        children: /* @__PURE__ */ jsx(
          "img",
          {
            src: isPasswordVisible ? "../../../../public/eye-open.svg" : "../../../../public/eye-close.svg",
            alt: "Toggle Password Visibility"
          }
        )
      }
    )
  ] });
});
const main = "";
export {
  ButtonBase as B,
  ChooseModule as C,
  InputReg as I,
  ButtonChoose as a
};
