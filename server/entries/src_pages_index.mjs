import { i as import_0 } from "../chunks/chunk-ef82e2eb.js";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMantineColorScheme, Group, Button, Menu, MultiSelect, MantineProvider } from "@mantine/core";
import { a as ButtonChoose, B as ButtonBase, C as ChooseModule, I as InputReg } from "../chunks/chunk-1e410d1f.js";
import cn from "classnames";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import "react-dom/server";
import "vike/server";
const styles$b = "";
const container = "_container_fesfh_1";
const base = "_base_fesfh_10";
const mobile = "_mobile_fesfh_14";
const styles$a = {
  container,
  base,
  mobile
};
function ChooseModuleMobile({
  width,
  height = "mobile",
  options
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
      className: cn(styles$a["container"], {
        [styles$a["mobile"]]: height === "mobile"
      }),
      children: options.map((option) => /* @__PURE__ */ jsx(
        ButtonChoose,
        {
          width: `${100 / options.length}%`,
          height: "mobile",
          color: selectedButton === option ? "active" : "no-active",
          onClick: () => handleButtonClick(option),
          children: option
        },
        option
      ))
    }
  );
}
function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  return /* @__PURE__ */ jsxs(Group, { justify: "center", mt: "xl", children: [
    /* @__PURE__ */ jsx(Button, { onClick: () => setColorScheme("light"), children: "Light" }),
    /* @__PURE__ */ jsx(Button, { onClick: () => setColorScheme("dark"), children: "Dark" }),
    /* @__PURE__ */ jsx(Button, { onClick: () => setColorScheme("auto"), children: "Auto" })
  ] });
}
const image$1 = "_image_nret9_10";
const content$1 = "_content_nret9_18";
const content1$1 = "_content1_nret9_23";
const title$1 = "_title_nret9_27";
const yearAndMileage = "_yearAndMileage_nret9_34";
const year$3 = "_year_nret9_34";
const mileage$1 = "_mileage_nret9_41";
const row = "_row_nret9_52";
const description$3 = "_description_nret9_56";
const location$1 = "_location_nret9_62";
const address = "_address_nret9_62";
const map = "_map_nret9_68";
const city = "_city_nret9_68";
const time = "_time_nret9_72";
const content2$1 = "_content2_nret9_76";
const price$1 = "_price_nret9_76";
const actions$1 = "_actions_nret9_81";
const like = "_like_nret9_86";
const compare$1 = "_compare_nret9_87";
const button$1 = "_button_nret9_94";
const styles$9 = {
  "adaptive-card": "_adaptive-card_nret9_1",
  image: image$1,
  content: content$1,
  content1: content1$1,
  title: title$1,
  yearAndMileage,
  year: year$3,
  mileage: mileage$1,
  "size-block": "_size-block_nret9_46",
  row,
  description: description$3,
  location: location$1,
  address,
  map,
  city,
  time,
  content2: content2$1,
  price: price$1,
  actions: actions$1,
  like,
  compare: compare$1,
  button: button$1
};
function AdaptiveCard$1({
  title: title2,
  year: year2,
  mileage: mileage2,
  price: price2,
  image: image2
}) {
  return /* @__PURE__ */ jsxs("div", { className: cn(styles$9["adaptive-card"]), children: [
    /* @__PURE__ */ jsx("div", { className: cn(styles$9["image"]), children: /* @__PURE__ */ jsx("img", { className: cn(styles$9["img"]), src: image2, alt: "car" }) }),
    /* @__PURE__ */ jsxs("div", { className: cn(styles$9["content"]), children: [
      /* @__PURE__ */ jsxs("div", { className: cn(styles$9["content1"]), children: [
        /* @__PURE__ */ jsx("div", { className: cn(styles$9["title"]), children: /* @__PURE__ */ jsx("span", { children: title2 }) }),
        /* @__PURE__ */ jsxs("div", { className: cn(styles$9["yearAndMileage"]), children: [
          /* @__PURE__ */ jsxs("span", { className: cn(styles$9["year"]), children: [
            year2,
            " г"
          ] }),
          /* @__PURE__ */ jsxs("span", { className: cn(styles$9["mileage"]), children: [
            mileage2,
            " км"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: cn(styles$9["size-block"]), children: [
          /* @__PURE__ */ jsxs("div", { className: cn(styles$9["row"]), children: [
            /* @__PURE__ */ jsx("div", { className: cn(styles$9["description"]), children: "Передний" }),
            /* @__PURE__ */ jsx("div", { className: cn(styles$9["description"]), children: "Механика" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: cn(styles$9["description"]), children: "1.5 л/123 л.с/Бензин" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: cn(styles$9["location"]), children: [
          /* @__PURE__ */ jsx("span", { className: cn(styles$9["address"]), children: "BorisHof МКАД 44" }),
          /* @__PURE__ */ jsxs("div", { className: cn(styles$9["map"]), children: [
            /* @__PURE__ */ jsx("img", { src: "../../../public/map.svg", alt: "map" }),
            /* @__PURE__ */ jsx("span", { className: cn(styles$9["city"]), children: "Москва, " }),
            /* @__PURE__ */ jsx("span", { className: cn(styles$9["time"]), children: "3 часа назад" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: cn(styles$9["content2"]), children: [
        /* @__PURE__ */ jsx("div", { className: cn(styles$9["price"]), children: /* @__PURE__ */ jsxs("span", { children: [
          price2,
          " ₽"
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: cn(styles$9["actions"]), children: [
          /* @__PURE__ */ jsx("div", { className: cn(styles$9["like"]), children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "../../../public/like.svg",
              alt: "like",
              title: "В избранное"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: cn(styles$9["compare"]), children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "../../../public/compare.svg",
              alt: "compare",
              title: "В сравнение"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx("button", { className: cn(styles$9["button"]), children: "Перейти" })
      ] })
    ] })
  ] });
}
const card = "_card_1x9h1_1";
const image = "_image_1x9h1_9";
const content = "_content_1x9h1_17";
const content1 = "_content1_1x9h1_22";
const title = "_title_1x9h1_22";
const location = "_location_1x9h1_27";
const description$2 = "_description_1x9h1_41";
const content2 = "_content2_1x9h1_47";
const mileage = "_mileage_1x9h1_51";
const year$2 = "_year_1x9h1_55";
const content3 = "_content3_1x9h1_59";
const price = "_price_1x9h1_62";
const actions = "_actions_1x9h1_69";
const compare = "_compare_1x9h1_75";
const date = "_date_1x9h1_78";
const styles$8 = {
  card,
  image,
  content,
  content1,
  title,
  location,
  "size-block": "_size-block_1x9h1_33",
  description: description$2,
  content2,
  mileage,
  year: year$2,
  content3,
  price,
  actions,
  compare,
  date
};
function BasicCard$1({
  title: title2,
  year: year2,
  mileage: mileage2,
  price: price2,
  image: image2
}) {
  return /* @__PURE__ */ jsxs("div", { className: cn(styles$8["card"]), children: [
    /* @__PURE__ */ jsx("div", { className: cn(styles$8["image"]), children: /* @__PURE__ */ jsx("img", { className: cn(styles$8["img"]), src: image2, alt: "car" }) }),
    /* @__PURE__ */ jsxs("div", { className: cn(styles$8["content"]), children: [
      /* @__PURE__ */ jsxs("div", { className: cn(styles$8["content1"]), children: [
        /* @__PURE__ */ jsx("div", { className: cn(styles$8["title"]), children: /* @__PURE__ */ jsx("span", { children: title2 }) }),
        /* @__PURE__ */ jsx("div", { className: cn(styles$8["location"]), children: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("img", { src: "../../../public/map.svg", alt: "map" }),
          /* @__PURE__ */ jsx("span", { children: "Moscow" })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: cn(styles$8["size-block"]), children: [
          /* @__PURE__ */ jsx("div", { className: cn(styles$8["description"]), children: "1.5 л/123 л.с/Бензин" }),
          /* @__PURE__ */ jsx("div", { className: cn(styles$8["description"]), children: "Механика" }),
          /* @__PURE__ */ jsx("div", { className: cn(styles$8["description"]), children: "Седан 5 дв." }),
          /* @__PURE__ */ jsx("div", { className: cn(styles$8["description"]), children: "Передний" }),
          /* @__PURE__ */ jsx("div", { className: cn(styles$8["description"]), children: "Серый" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: cn(styles$8["content2"]), children: [
        /* @__PURE__ */ jsx("div", { className: cn(styles$8["mileage"]), children: /* @__PURE__ */ jsxs("span", { children: [
          mileage2,
          " км"
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: cn(styles$8["year"]), children: /* @__PURE__ */ jsxs("span", { children: [
          year2,
          " г"
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: cn(styles$8["content3"]), children: [
        /* @__PURE__ */ jsx("div", { className: cn(styles$8["price"]), children: /* @__PURE__ */ jsxs("span", { children: [
          price2,
          " ₽"
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: cn(styles$8["actions"]), children: [
          /* @__PURE__ */ jsx("div", { className: cn(styles$8["like"]), children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "../../../public/like.svg",
              alt: "like",
              title: "В избранное"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: cn(styles$8["compare"]), children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "../../../public/compare.svg",
              alt: "compare",
              title: "В сравнение"
            }
          ) }),
          /* @__PURE__ */ jsx("span", { className: cn(styles$8["date"]), children: "17 августа 2022" })
        ] })
      ] })
    ] })
  ] });
}
const BasicCard = "_BasicCard_y7d8n_2";
const AdaptiveCard = "_AdaptiveCard_y7d8n_5";
const styles$7 = {
  BasicCard,
  AdaptiveCard
};
function Card({
  title: title2,
  year: year2,
  mileage: mileage2,
  price: price2,
  image: image2
}) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: cn(styles$7["BasicCard"]), children: /* @__PURE__ */ jsx(
      BasicCard$1,
      {
        title: title2,
        year: year2,
        mileage: mileage2,
        price: price2,
        image: image2
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: cn(styles$7["AdaptiveCard"]), children: /* @__PURE__ */ jsx(
      AdaptiveCard$1,
      {
        title: title2,
        year: year2,
        mileage: mileage2,
        price: price2,
        image: image2
      }
    ) })
  ] });
}
const marks$1 = "_marks_e9oe5_7";
const span$1 = "_span_e9oe5_17";
const columns$1 = "_columns_e9oe5_37";
const column1$1 = "_column1_e9oe5_44";
const column2$1 = "_column2_e9oe5_45";
const column3$1 = "_column3_e9oe5_46";
const description$1 = "_description_e9oe5_76";
const year$1 = "_year_e9oe5_99";
const styles$6 = {
  marks: marks$1,
  span: span$1,
  "marks-list": "_marks-list_e9oe5_21",
  columns: columns$1,
  column1: column1$1,
  column2: column2$1,
  column3: column3$1,
  "column1-list": "_column1-list_e9oe5_50",
  "column2-list": "_column2-list_e9oe5_51",
  "column3-list": "_column3-list_e9oe5_52",
  description: description$1,
  "description-list": "_description-list_e9oe5_82",
  year: year$1
};
const marks = "_marks_e9oe5_7";
const span = "_span_e9oe5_17";
const columns = "_columns_e9oe5_37";
const column1 = "_column1_e9oe5_44";
const column2 = "_column2_e9oe5_45";
const column3 = "_column3_e9oe5_46";
const description = "_description_e9oe5_76";
const year = "_year_e9oe5_99";
const Footer_module = {
  marks,
  span,
  "marks-list": "_marks-list_e9oe5_21",
  columns,
  column1,
  column2,
  column3,
  "column1-list": "_column1-list_e9oe5_50",
  "column2-list": "_column2-list_e9oe5_51",
  "column3-list": "_column3-list_e9oe5_52",
  description,
  "description-list": "_description-list_e9oe5_82",
  year
};
function Footer() {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsxs("footer", { children: [
    /* @__PURE__ */ jsxs("div", { className: cn(styles$6["marks"]), children: [
      /* @__PURE__ */ jsx("span", { className: cn(styles$6["span"]), children: "Производители авто: " }),
      /* @__PURE__ */ jsxs("ul", { className: cn(styles$6["marks-list"]), children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Все марки" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Тойота" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Ниссан" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Хонда" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Мицубиси" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Мазда" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Субару" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Хендай" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Форд" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Фольксваген" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: "БМВ" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Киа" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Лада" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: cn(styles$6["columns"]), children: [
      /* @__PURE__ */ jsx("div", { className: cn(styles$6["column1"]), children: /* @__PURE__ */ jsxs("ul", { className: cn(styles$6["column1-list"]), children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Автомобили" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Подать объявление" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Автокаталог" }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: cn(styles$6["column2"]), children: /* @__PURE__ */ jsxs("ul", { className: cn(styles$6["column2-list"]), children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Отзывы владельцев" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Договор купли-продажи" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Размещение на ABATO" }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: cn(styles$6["column3"]), children: /* @__PURE__ */ jsxs("ul", { className: cn(styles$6["column3-list"]), children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Правовые вопросы" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Техподдержка" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Безопасность" }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: cn(styles$6["description"]), children: /* @__PURE__ */ jsxs("ul", { className: cn(styles$6["description-list"]), children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "О проекте" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Помощь" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Правила" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Для СМИ" }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("span", { className: cn(styles$6["year"]), children: [
      currentYear,
      " ABATO"
    ] }) })
  ] });
}
const selectedCity = "_selectedCity_17wuz_2";
const whiteText = "_whiteText_17wuz_10";
const dropdown = "_dropdown_17wuz_15";
const cityList = "_cityList_17wuz_15";
const cityItem = "_cityItem_17wuz_30";
const styles$5 = {
  selectedCity,
  whiteText,
  dropdown,
  cityList,
  cityItem
};
function DropCity() {
  const initialCities = [
    { id: 1, name: "Сухум" },
    { id: 2, name: "Гагра" },
    { id: 3, name: "Гудаута" },
    { id: 4, name: "Гали" },
    { id: 5, name: "Очамчира" },
    { id: 7, name: "Ткварчели" },
    { id: 8, name: "Пицунда" },
    { id: 9, name: "Новый Афон" }
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity2, setSelectedCity] = useState(initialCities[0]);
  const [cities, setCities] = useState(initialCities);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleCitySelect = (city2) => {
    setSelectedCity(city2);
    setIsOpen(false);
    setCities((prevCities) => {
      const updatedCities = prevCities.filter((item) => item.id !== city2.id);
      return [city2, ...updatedCities];
    });
  };
  return /* @__PURE__ */ jsxs(Menu, { width: 200, shadow: "md", children: [
    /* @__PURE__ */ jsx(Menu.Target, { children: /* @__PURE__ */ jsxs("div", { className: styles$5.selectedCity, onClick: toggleDropdown, children: [
      /* @__PURE__ */ jsx("img", { src: "/map.svg", alt: "map" }),
      /* @__PURE__ */ jsx("span", { className: styles$5.whiteText, children: selectedCity2.name })
    ] }) }),
    /* @__PURE__ */ jsx(Menu.Dropdown, { className: cn(styles$5["dropdown"]), children: isOpen && /* @__PURE__ */ jsx("div", { className: styles$5.cityList, children: cities.map((city2) => /* @__PURE__ */ jsx(
      Menu.Item,
      {
        component: "a",
        className: cn(styles$5.cityItem, {
          [styles$5.selectedCity]: city2.id === selectedCity2.id
        }),
        onClick: () => handleCitySelect(city2),
        children: city2.name
      },
      city2.id
    )) }) })
  ] });
}
const modal = "_modal_ot3so_2";
const mobile_btn$1 = "_mobile_btn_ot3so_6";
const active = "_active_ot3so_34";
const menu = "_menu_ot3so_37";
const styles$4 = {
  modal,
  mobile_btn: mobile_btn$1,
  "modal-close": "_modal-close_ot3so_28",
  active,
  menu,
  "menu-account": "_menu-account_ot3so_43",
  "menu-account-button": "_menu-account-button_ot3so_50",
  "menu-list": "_menu-list_ot3so_56",
  "menu-list-img": "_menu-list-img_ot3so_63",
  "menu-list-a": "_menu-list-a_ot3so_66"
};
function Modal({ items }) {
  const [menuActive, setMenuActive] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: cn(styles$4["modal"], {
          [styles$4.active]: menuActive,
          [styles$4.blur]: menuActive
        }),
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: cn(styles$4["modal-close"]),
              onClick: () => setMenuActive(!menuActive),
              children: /* @__PURE__ */ jsx(AiOutlineClose, { size: 20 })
            }
          ),
          /* @__PURE__ */ jsx("div", { className: cn(styles$4["modal-content"]), children: /* @__PURE__ */ jsxs("ul", { className: cn(styles$4["menu"]), children: [
            /* @__PURE__ */ jsxs("li", { className: cn(styles$4["menu-account"]), children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  className: cn(styles$4["menu-account-img"]),
                  src: "../../../../public/accaunt.svg",
                  alt: ""
                }
              ),
              /* @__PURE__ */ jsx(ButtonBase, { width: "61px", height: "mobile", children: "Вход" })
            ] }),
            items.map((item) => /* @__PURE__ */ jsxs("li", { className: cn(styles$4["menu-list"]), children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  className: cn(styles$4["menu-list-img"]),
                  src: item.icon,
                  alt: item.value
                }
              ),
              /* @__PURE__ */ jsx("a", { className: cn(styles$4["menu-list-a"]), href: item.href, children: item.value })
            ] }))
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        onClick: () => setMenuActive(!menuActive),
        className: cn(styles$4["mobile_btn"]),
        children: menuActive ? /* @__PURE__ */ jsx(AiOutlineClose, { size: 25 }) : /* @__PURE__ */ jsx(AiOutlineMenu, { size: 25 })
      }
    )
  ] });
}
const header = "_header_14qbh_1";
const logo = "_logo_14qbh_17";
const button = "_button_14qbh_55";
const mobile_btn = "_mobile_btn_14qbh_58";
const buttonSec = "_buttonSec_14qbh_73";
const styles$3 = {
  header,
  "header-container": "_header-container_14qbh_5",
  "header-container-first": "_header-container-first_14qbh_13",
  logo,
  "city-select": "_city-select_14qbh_23",
  "header-container-second": "_header-container-second_14qbh_26",
  "like-header": "_like-header_14qbh_29",
  "compare-header": "_compare-header_14qbh_43",
  button,
  mobile_btn,
  buttonSec
};
function Header() {
  const items = [
    { value: "Избранное", href: "/main", icon: "../../../public/like.svg" },
    { value: "Сравнения", href: "/main", icon: "../../../public/compare.svg" },
    { value: "Сообщения", href: "/main", icon: "../../../public/message.svg" },
    {
      value: "Мои объявления",
      href: "/main",
      icon: "../../../public/add2.svg"
    }
  ];
  return /* @__PURE__ */ jsxs("header", { children: [
    /* @__PURE__ */ jsx("div", { className: cn(styles$3["header"]), children: /* @__PURE__ */ jsxs("div", { className: cn(styles$3["header-container"]), children: [
      /* @__PURE__ */ jsxs("div", { className: cn(styles$3["header-container-first"]), children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            className: cn(styles$3["logo"]),
            src: "../../../public/logo.svg",
            alt: "logo"
          }
        ),
        /* @__PURE__ */ jsx(DropCity, {})
      ] }),
      /* @__PURE__ */ jsxs("div", { className: cn(styles$3["header-container-second"]), children: [
        /* @__PURE__ */ jsxs("div", { className: cn(styles$3["like-header"]), children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "../../../public/like.svg",
              alt: "like",
              style: { fill: "white" }
            }
          ),
          /* @__PURE__ */ jsx("span", { children: "Избранное" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: cn(styles$3["compare-header"]), children: [
          /* @__PURE__ */ jsx("img", { src: "../../../public/compare.svg", alt: "compare" }),
          /* @__PURE__ */ jsx("span", { children: "Сравнить" })
        ] }),
        /* @__PURE__ */ jsx(ButtonBase, { width: "179px", className: styles$3.button, children: "Войти" }),
        /* @__PURE__ */ jsx(
          ButtonBase,
          {
            width: "268px",
            color: "secondary",
            className: styles$3.buttonSec,
            children: "Разместить объявление"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Modal, { items })
  ] });
}
const input$2 = "_input_15fu9_1";
const label = "_label_15fu9_4";
const styles$2 = {
  input: input$2,
  label
};
function InputFltr() {
  return /* @__PURE__ */ jsx("div", { className: styles$2["input"], children: /* @__PURE__ */ jsx(
    MultiSelect,
    {
      placeholder: "Марка",
      data: ["Audi", "BMW", "Mercedes", "Volvo"],
      searchable: true,
      nothingFoundMessage: "Нет совпадений..."
    }
  ) });
}
const input$1 = "_input_uu69s_1";
const styles$1 = {
  input: input$1
};
function TextInputLeft({ ...props }) {
  const handleChange = (event) => {
    let { value } = event.target;
    value = value.replace(/\D/g, "");
    event.target.value = value;
    if (props.onChange) {
      props.onChange(event);
    }
  };
  return /* @__PURE__ */ jsx("input", { className: cn(styles$1["input"]), onChange: handleChange, ...props });
}
const input = "_input_10xqs_1";
const styles = {
  input
};
function TextInputRight({ ...props }) {
  const handleChange = (event) => {
    let { value } = event.target;
    value = value.replace(/\D/g, "");
    event.target.value = value;
    if (props.onChange) {
      props.onChange(event);
    }
  };
  return /* @__PURE__ */ jsx("input", { className: cn(styles["input"]), onChange: handleChange, ...props });
}
function TextInputLR() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      TextInputLeft,
      {
        inputMode: "numeric",
        maxLength: 8,
        placeholder: "Цена от"
      }
    ),
    /* @__PURE__ */ jsx(
      TextInputRight,
      {
        inputMode: "numeric",
        maxLength: 8,
        placeholder: "до"
      }
    )
  ] });
}
function Page() {
  return /* @__PURE__ */ jsxs(MantineProvider, { children: [
    /* @__PURE__ */ jsx("div", { className: "header", children: /* @__PURE__ */ jsx(Header, {}) }),
    /* @__PURE__ */ jsx(ColorSchemeToggle, {}),
    /* @__PURE__ */ jsxs("div", { className: "width", children: [
      /* @__PURE__ */ jsx("h1", { children: "Кнопки" }),
      /* @__PURE__ */ jsxs("div", { className: "margin", children: [
        /* @__PURE__ */ jsx(ButtonBase, { width: "240px", height: "base", color: "primary", children: "Войти" }),
        /* @__PURE__ */ jsx(ButtonBase, { width: "268px", height: "base", color: "secondary", children: "Разместить объявление" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "margin", children: [
        /* @__PURE__ */ jsx(ButtonBase, { width: "101px", height: "mobile", color: "primary", children: "Войти" }),
        /* @__PURE__ */ jsx(ButtonBase, { width: "101px", height: "mobile", color: "secondary", children: "Войти" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "margin", children: /* @__PURE__ */ jsx(
        ChooseModule,
        {
          width: "380px",
          height: "base",
          options: ["Все", "Новые", "С пробегом"]
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "margin", children: /* @__PURE__ */ jsx(
        ChooseModuleMobile,
        {
          width: "290px",
          options: ["Все", "Новые", "С пробегом"]
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "margin" }),
      /* @__PURE__ */ jsx("h1", { children: "Инпуты" }),
      /* @__PURE__ */ jsx("div", { className: "margin", children: /* @__PURE__ */ jsx(InputReg, { placeholder: "Телефон" }) }),
      /* @__PURE__ */ jsx("div", { className: "margin", children: /* @__PURE__ */ jsx(InputFltr, {}) }),
      /* @__PURE__ */ jsx("div", { className: "margin", children: /* @__PURE__ */ jsx(TextInputLR, {}) }),
      /* @__PURE__ */ jsx("div", { className: "margin", children: /* @__PURE__ */ jsx(
        Card,
        {
          image: "../../public/car1.1.png",
          title: "Datsun on-DO, I",
          location: "wef",
          characteristic: "wef",
          year: 2023,
          mileage: 23e3,
          price: 75e4
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const import_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Page
}, Symbol.toStringTag, { value: "Module" }));
const configValuesImported = [
  {
    configName: "onRenderHtml",
    importPath: "/renderer/+onRenderHtml.tsx",
    isValueFile: true,
    exportValues: import_0
  },
  {
    configName: "Page",
    importPath: "/src/pages/index/+Page.tsx",
    isValueFile: true,
    exportValues: import_1
  }
];
const configValuesSerialized = {
  ["passToClient"]: {
    definedAt: { "files": [{ "filePathToShowToUser": "/renderer/+config.h.ts", "fileExportPathToShowToUser": ["default", "passToClient"] }] },
    valueSerialized: '["pageProps","urlPathname"]'
  }
};
export {
  configValuesImported,
  configValuesSerialized
};
