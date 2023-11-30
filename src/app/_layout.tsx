import { Slot } from 'expo-router';

import '../../global.css';
import '../i18n';
import ThemeProvider from '../components/theme-provider';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Slot />
    </ThemeProvider>
  );
}
