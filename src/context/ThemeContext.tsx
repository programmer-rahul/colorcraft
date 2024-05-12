import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { LocalStorage } from "../utils/helper";

export type ThemesType = "dark" | "light";

type ContextTypes = {
  currentTheme: ThemesType;
  setCurrentTheme: Dispatch<SetStateAction<ThemesType>>;
};

export const ThemeContext = createContext<ContextTypes>({
  currentTheme: "dark",
  setCurrentTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemesType>(() => {
    const theme = LocalStorage.get("theme");
    return theme ? theme : "light";
  });

  useEffect(() => {
    currentTheme === "dark"
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
