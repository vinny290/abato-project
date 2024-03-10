import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import ChooseModule from "../../features/ChoseModule/ChoseModule";
import ChooseModuleMobile from "../../features/ChoseModule/ChoseModuleMobile/ChoseModuleMobile";
import { ColorSchemeToggle } from "../../features/ColorSchemeToggle/ColorSchemeToggle";
import Card from "../../entities/Card/Card";
import Footer from "../../entities/Footer/Footer";
import Header from "../../entities/header/header";
import ButtonBase from "../../shared/ui/Buttons/ButtonBase";
import { InputFltr } from "../../shared/ui/Inputs/InputFiltr/InputFiltr";
import InputReg from "../../shared/ui/Inputs/InputsReg/InputReg";
import TextInputLR from "../../shared/ui/Inputs/TextInput/TextInput";
import "../main.css";

function Page() {
  return (
    <MantineProvider>
      <div className="header">
        <Header />
      </div>

      <ColorSchemeToggle />
      <div className="width">
        <h1>Кнопки</h1>

        <div className="margin">
          <ButtonBase width="240px" height="base" color="primary">
            Войти
          </ButtonBase>
          <ButtonBase width="268px" height="base" color="secondary">
            Разместить объявление
          </ButtonBase>
        </div>
        <div className="margin">
          <ButtonBase width="101px" height="mobile" color="primary">
            Войти
          </ButtonBase>
          <ButtonBase width="101px" height="mobile" color="secondary">
            Войти
          </ButtonBase>
        </div>
        <div className="margin">
          <ChooseModule
            width="380px"
            height="base"
            options={["Все", "Новые", "С пробегом"]}
          />
        </div>
        <div className="margin">
          <ChooseModuleMobile
            width="290px"
            options={["Все", "Новые", "С пробегом"]}
          />
        </div>
        <div className="margin"></div>
        <h1>Инпуты</h1>
        <div className="margin">
          <InputReg placeholder="Телефон" />
        </div>
        <div className="margin">
          <InputFltr />
        </div>
        <div className="margin">
          <TextInputLR />
        </div>
        <div className="margin">
          <Card
            image="../../public/car1.1.png"
            title="Datsun on-DO, I"
            location="wef"
            characteristic="wef"
            year={2023}
            mileage={23000}
            price={750000}
          />
        </div>
      </div>

      <Footer />
    </MantineProvider>
  );
}

export { Page };
