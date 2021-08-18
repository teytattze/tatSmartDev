import * as React from 'react';

export function useLocalStorage(key: string, initialValue: string = '') {
  const [value, setStoredValue] = React.useState<string>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      return initialValue;
    }
  });

  const setValue = (value: string) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      return err;
    }
  };

  return { value, setValue };
}
