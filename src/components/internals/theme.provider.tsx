import * as React from 'react';
import { localStorageKey } from '../../shared/consts/local-storage.const';
import { ThemeMode } from '../../shared/enums/theme.enum';
import { useLocalStorage } from '../../shared/hooks/use-local-storage';

export type ThemeContextValue = {
  dark: boolean;
  handleDarkMode: () => void;
};

export const ThemeContext = React.createContext<ThemeContextValue>({
  dark: true,
  handleDarkMode: () => {},
});

export type ThemeProviderProps = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [dark, setDark] = React.useState<boolean>(true);
  const { value, setValue } = useLocalStorage(localStorageKey.THEME_MODE);

  React.useEffect(() => {
    const initTheme = () => {
      if (value === ThemeMode.WHITE) {
        return setDark(false);
      }
      return setDark(true);
    };
    return initTheme();
  }, [value]);

  const handleDarkMode = () => {
    if (dark) {
      setDark(false);
      setValue(ThemeMode.WHITE);
    } else {
      setDark(true);
      setValue(ThemeMode.DARK);
    }
  };

  return (
    <ThemeContext.Provider value={{ dark, handleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeContext.displayName = 'Theme';
