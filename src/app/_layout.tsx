import { Slot } from 'expo-router';

import '../../global.css';
import '../i18n';
import { StatusBar } from 'expo-status-bar';

import ThemeProvider from '../components/theme-provider';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <StatusBar style="dark" />
      <Slot />
    </ThemeProvider>
  );
}
