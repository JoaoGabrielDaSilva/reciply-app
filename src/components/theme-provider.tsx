import { ReactNode, useMemo } from 'react';
import { View } from 'react-native';

import { useTheme } from '../store/use-theme';
import { themes } from '../themes';

type ThemeProviderProps = {
  children: ReactNode;
};

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const { currentTheme } = useTheme();

  const theme = useMemo(() => themes[currentTheme], [currentTheme]);

  return (
    <View style={theme} className="flex-1">
      {children}
    </View>
  );
}
