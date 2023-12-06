import { lightTheme } from './light';

export const themes = {
  light: lightTheme,
} as const;

export type Theme = keyof typeof themes;
