var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/plugin/index.ts
var plugin_exports = {};
__export(plugin_exports, {
  default: () => plugin_default
});
module.exports = __toCommonJS(plugin_exports);
var import_antd_style = require("antd-style");
var import_chalk = __toESM(require("chalk"));
var import_fs = __toESM(require("fs"));
var import_path = require("path");
var import_utils = require("./utils");
var SSRPlugin = (api) => {
  api.describe({
    key: "dumi-theme-antd-style"
  });
  if (!api.userConfig.ssr)
    return;
  api.logger.info("detect ssr config, when building html will extract css.");
  const writeCSSFile = (key, hashKey, cssString) => {
    const fileName = `ssr-${key}.${(0, import_utils.getHash)(hashKey)}.css`;
    const filePath = (0, import_path.join)(api.paths.absOutputPath, fileName);
    if (!import_fs.default.existsSync(filePath)) {
      api.logger.event(import_chalk.default.grey(`write to: ${filePath}`));
      import_fs.default.writeFileSync(filePath, cssString, "utf8");
    }
    return fileName;
  };
  const addLinkStyle = (html, cssFile) => {
    const prefix = api.userConfig.publicPath || api.config.publicPath;
    return html.replace("</head>", `<link rel="stylesheet" href="${prefix + cssFile}"></head>`);
  };
  api.modifyExportHTMLFiles(
    (files) => files.filter((f) => !f.path.includes(":")).map((file) => {
      const antdCache = global.__ANTD_CACHE__;
      const styles = (0, import_antd_style.extractStaticStyle)(file.content, { antdCache });
      styles.forEach((result) => {
        api.logger.event(
          `${import_chalk.default.yellow(file.path)} include ${import_chalk.default.blue`[${result.key}]`} ${import_chalk.default.yellow(
            result.ids.length
          )} styles`
        );
        const cssFile = writeCSSFile(result.key, result.ids.join(""), result.css);
        file.content = addLinkStyle(file.content, cssFile);
      });
      return file;
    })
  );
};
var plugin_default = SSRPlugin;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
