import { setImportBuildGetters } from "vike/__internal/loadImportBuild";
const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const pageFilesList = [];
const neverLoaded = {};
const isGeneratedFile = true;
const pageConfigsSerialized = [
  {
    pageId: "/src/pages/_error",
    isErrorPage: true,
    routeFilesystem: void 0,
    loadConfigValuesAll: () => import("./entries/src_pages_error.mjs"),
    configValuesSerialized: {
      ["isClientSideRenderable"]: {
        definedAt: { "isComputed": true },
        valueSerialized: "true"
      }
    },
    configValuesImported: []
  },
  {
    pageId: "/src/pages/acc",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/acc", "definedBy": "/src/pages/acc/" },
    loadConfigValuesAll: () => import("./entries/src_pages_acc.mjs"),
    configValuesSerialized: {
      ["isClientSideRenderable"]: {
        definedAt: { "isComputed": true },
        valueSerialized: "true"
      }
    },
    configValuesImported: []
  },
  {
    pageId: "/src/pages/index",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/", "definedBy": "/src/pages/index/" },
    loadConfigValuesAll: () => import("./entries/src_pages_index.mjs"),
    configValuesSerialized: {
      ["isClientSideRenderable"]: {
        definedAt: { "isComputed": true },
        valueSerialized: "true"
      }
    },
    configValuesImported: []
  }
];
const pageConfigGlobalSerialized = {
  configValuesImported: []
};
const pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
const pageFilesLazyServer1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyServer = { ...pageFilesLazyServer1 };
pageFilesLazy[".page.server"] = pageFilesLazyServer;
const pageFilesEagerRoute1 = /* @__PURE__ */ Object.assign({});
const pageFilesEagerRoute = { ...pageFilesEagerRoute1 };
pageFilesEager[".page.route"] = pageFilesEagerRoute;
const pageFilesExportNamesEagerClient1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
const pageFiles = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isGeneratedFile,
  neverLoaded,
  pageConfigGlobalSerialized,
  pageConfigsSerialized,
  pageFilesEager,
  pageFilesExportNamesEager,
  pageFilesExportNamesLazy,
  pageFilesLazy,
  pageFilesList
}, Symbol.toStringTag, { value: "Module" }));
setImportBuildGetters({
  pageFiles: () => pageFiles,
  clientManifest: () => {
    return {
  "\u0000virtual:vike:pageConfigValuesAll:client:/src/pages/acc.css": {
    "file": "assets/static/acc.b093d3b2.css",
    "src": "\u0000virtual:vike:pageConfigValuesAll:client:/src/pages/acc.css"
  },
  "\u0000virtual:vike:pageConfigValuesAll:client:/src/pages/index.css": {
    "file": "assets/static/index.6b5804f9.css",
    "src": "\u0000virtual:vike:pageConfigValuesAll:client:/src/pages/index.css"
  },
  "InputReg.css": {
    "file": "assets/static/InputReg.9b5be57c.css",
    "src": "InputReg.css"
  },
  "_chunk-4de519be.js": {
    "css": [
      "assets/static/onRenderClient.d4835ae9.css"
    ],
    "file": "assets/chunks/chunk-4de519be.js"
  },
  "_chunk-81c901d4.js": {
    "css": [
      "assets/static/InputReg.9b5be57c.css"
    ],
    "file": "assets/chunks/chunk-81c901d4.js",
    "imports": [
      "_chunk-4de519be.js"
    ]
  },
  "_onRenderClient.css": {
    "file": "assets/static/onRenderClient.d4835ae9.css",
    "src": "_onRenderClient.css"
  },
  "node_modules/vike/dist/esm/client/server-routing-runtime/entry.js": {
    "dynamicImports": [
      "virtual:vike:pageConfigValuesAll:client:/src/pages/_error",
      "virtual:vike:pageConfigValuesAll:client:/src/pages/acc",
      "virtual:vike:pageConfigValuesAll:client:/src/pages/index"
    ],
    "file": "assets/entries/entry-server-routing.1782f550.js",
    "isEntry": true,
    "src": "node_modules/vike/dist/esm/client/server-routing-runtime/entry.js"
  },
  "renderer/logo.svg": {
    "file": "assets/static/logo.bebe2e90.svg",
    "src": "renderer/logo.svg"
  },
  "virtual:vike:pageConfigValuesAll:client:/src/pages/_error": {
    "file": "assets/entries/src_pages_error.6a3e7325.js",
    "imports": [
      "_chunk-4de519be.js"
    ],
    "isDynamicEntry": true,
    "isEntry": true,
    "src": "virtual:vike:pageConfigValuesAll:client:/src/pages/_error"
  },
  "virtual:vike:pageConfigValuesAll:client:/src/pages/acc": {
    "css": [
      "assets/static/acc.b093d3b2.css"
    ],
    "file": "assets/entries/src_pages_acc.f70d13e8.js",
    "imports": [
      "_chunk-4de519be.js",
      "_chunk-81c901d4.js"
    ],
    "isDynamicEntry": true,
    "isEntry": true,
    "src": "virtual:vike:pageConfigValuesAll:client:/src/pages/acc"
  },
  "virtual:vike:pageConfigValuesAll:client:/src/pages/index": {
    "css": [
      "assets/static/index.6b5804f9.css"
    ],
    "file": "assets/entries/src_pages_index.24b99f5f.js",
    "imports": [
      "_chunk-4de519be.js",
      "_chunk-81c901d4.js"
    ],
    "isDynamicEntry": true,
    "isEntry": true,
    "src": "virtual:vike:pageConfigValuesAll:client:/src/pages/index"
  }
};
  },
  pluginManifest: () => ({
    "version": "0.4.151",
    "usesClientRouter": false,
    "manifestKeyMap": {},
    "baseServer": "/",
    "baseAssets": "/",
    "includeAssetsImportedByServer": true,
    "redirects": {},
    "trailingSlash": false,
    "disableUrlNormalization": false
  })
});
