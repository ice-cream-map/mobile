import React, { useState, useEffect, createContext, useContext } from 'react';
import { useColorScheme } from 'react-native-appearance';
import { lightColors, darkColors, Colors } from '../Theme/colorThemes';

interface IContext {
  isDark: boolean;
  colors: Colors;
  setScheme: (value: 'dark' | 'light') => void;
}

export const ThemeContext = createContext<IContext>({
  isDark: false,
  colors: lightColors,
  setScheme: () => null,
});

export const ThemeProvider: React.FC = ({ children }) => {
  const colorScheme = useColorScheme();

  const [isDark, setIsDark] = useState(colorScheme === 'dark');

  useEffect(() => {
    setIsDark(colorScheme === 'dark');
  }, [colorScheme]);

  const defaultTheme = {
    isDark,
    colors: isDark ? darkColors : lightColors,
    setScheme: (scheme: string) => setIsDark(scheme === 'dark'),
  };

  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
