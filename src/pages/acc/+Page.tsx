import { MantineProvider } from "@mantine/core";
import ChooseModule from "../../features/ChoseModule/ChoseModule";
import HeaderReg from "../../entities/header/HeaderReg/HeaderReg";
import ButtonBase from "../../shared/ui/Buttons/ButtonBase";
import InputReg from "../../shared/ui/Inputs/InputsReg/InputReg";
import "../main.css";
import styles from "./Account.module.scss";

export default function Account() {
  return (
    <MantineProvider>
      <div className={styles.header}>
        <HeaderReg />
      </div>
      <div className={styles.wrap}>
        <div className={styles.container}>
          <div className={styles.regModule}>
            <ChooseModule
              width="330px"
              height="base"
              options={["Вход", "Регистрация"]}
            />
          </div>
          <div className={styles.inputs}>
            <InputReg placeholder="Телефон" />
            <InputReg placeholder="Пароль" type="password" />
          </div>
          <ButtonBase className={styles.button} width="240px">
            Вход
          </ButtonBase>
          <span className={styles.text}>
            При входе вы принимаете условия использования сайта и соглашаетесь
            на обработку персональных данных согласно политике
            конфиденциальности.
          </span>
        </div>
      </div>
    </MantineProvider>
  );
}
