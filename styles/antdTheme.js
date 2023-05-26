import { darkTheme, lightTheme } from "./theme";
export var getAntdTheme = function getAntdTheme(appearance) {
  return appearance === 'dark' ? darkTheme : lightTheme;
};