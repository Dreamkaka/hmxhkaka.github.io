import { create } from 'zustand';
import { persist } from 'zustand/middleware';
export var useThemeStore = create()(persist(function () {
  return {
    themeMode: 'auto'
  };
}, {
  name: 'ANTD_STYLE_DOC_STORE'
}));