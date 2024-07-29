import { useState, useEffect } from "react";

type IlsResult<T> = [T, (value: T) => void, () => void];

function useLocalStorage<T>(key: string, initialValue: T): IlsResult<T> {
  const getStoredValue = () => {
    try {
      const item = localStorage.getItem(key);
      const va = item ? JSON.parse(item) : initialValue;
      return va;
    } catch (error) {
      console.error(
        `Error getting item from localStorage by key "${key}":`,
        error,
      );
      return initialValue;
    }
  };
  const [storedValue, setStoredValue] = useState<T>(getStoredValue);

  const setValue = (value: T) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(
        `Error setting item in localStorage by key "${key}":`,
        error,
      );
    }
  };

  const remove = () => {
    try {
      localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.error(
        `Error removing item from localStorage by key "${key}":`,
        error,
      );
    }
  };

  useEffect(() => {
    const item = localStorage.getItem(key);
    if (!item) {
      localStorage.setItem(key, JSON.stringify(initialValue));
    }
  }, [key, initialValue]);

  return [storedValue, setValue, remove];
}

export default useLocalStorage;
