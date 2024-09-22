import { useOsTheme } from 'naive-ui';

const osThemeRef = useOsTheme();

export const osThemeKey = Symbol() as InjectionKey<typeof osThemeRef>;
export const switchThemeKey = Symbol() as InjectionKey<Ref<boolean>>;
