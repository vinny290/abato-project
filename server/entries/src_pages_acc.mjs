import { i as import_0 } from "../chunks/chunk-ef82e2eb.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { MantineProvider } from "@mantine/core";
import { C as ChooseModule, I as InputReg, B as ButtonBase } from "../chunks/chunk-1e410d1f.js";
import cn from "classnames";
import "react-dom/server";
import "react";
import "vike/server";
const header = "_header_59fcz_1";
const logo = "_logo_59fcz_13";
const styles$1 = {
  header,
  "header-container": "_header-container_59fcz_5",
  logo
};
function HeaderReg() {
  return /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx("div", { className: cn(styles$1["header"]), children: /* @__PURE__ */ jsx("div", { className: cn(styles$1["header-container"]), children: /* @__PURE__ */ jsx(
    "img",
    {
      className: cn(styles$1["logo"]),
      src: "../../../public/logo.svg",
      alt: "logo"
    }
  ) }) }) });
}
const wrap = "_wrap_98kib_1";
const container = "_container_98kib_7";
const regModule = "_regModule_98kib_18";
const inputs = "_inputs_98kib_21";
const button = "_button_98kib_26";
const text = "_text_98kib_30";
const styles = {
  wrap,
  container,
  regModule,
  inputs,
  button,
  text
};
function Account() {
  return /* @__PURE__ */ jsxs(MantineProvider, { children: [
    /* @__PURE__ */ jsx("div", { className: styles.header, children: /* @__PURE__ */ jsx(HeaderReg, {}) }),
    /* @__PURE__ */ jsx("div", { className: styles.wrap, children: /* @__PURE__ */ jsxs("div", { className: styles.container, children: [
      /* @__PURE__ */ jsx("div", { className: styles.regModule, children: /* @__PURE__ */ jsx(
        ChooseModule,
        {
          width: "330px",
          height: "base",
          options: ["Вход", "Регистрация"]
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: styles.inputs, children: [
        /* @__PURE__ */ jsx(InputReg, { placeholder: "Телефон" }),
        /* @__PURE__ */ jsx(InputReg, { placeholder: "Пароль", type: "password" })
      ] }),
      /* @__PURE__ */ jsx(ButtonBase, { className: styles.button, width: "240px", children: "Вход" }),
      /* @__PURE__ */ jsx("span", { className: styles.text, children: "При входе вы принимаете условия использования сайта и соглашаетесь на обработку персональных данных согласно политике конфиденциальности." })
    ] }) })
  ] });
}
const import_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Account
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
    importPath: "/src/pages/acc/+Page.tsx",
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
