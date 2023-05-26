import { create } from 'zustand';
export var useStore = create(function () {
  return {
    mode: 'oklch'
  };
});