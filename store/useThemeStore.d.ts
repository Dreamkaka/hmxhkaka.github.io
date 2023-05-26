import type { ThemeMode } from 'antd-style';
interface Store {
    themeMode: ThemeMode;
}
export declare const useThemeStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<Store>, "persist"> & {
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<Store, {
            themeMode: ThemeMode;
        }>>) => void;
        clearStorage: () => void;
        rehydrate: () => void | Promise<void>;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: Store) => void) => () => void;
        onFinishHydration: (fn: (state: Store) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<Store, {
            themeMode: ThemeMode;
        }>>;
    };
}>;
export {};
