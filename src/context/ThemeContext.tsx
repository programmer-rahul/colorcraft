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

type ContextTypes = {
  currentTheme: "dark" | "light";
  setCurrentTheme: Dispatch<SetStateAction<"dark" | "light">>;
};

export const ThemeContext = createContext<ContextTypes>({
  currentTheme: "dark",
  setCurrentTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<"dark" | "light">(() => {
    const theme = LocalStorage.get("theme");
    return theme ? theme : "light";
  });

  useEffect(() => {
    // console.log("theme changed");
    
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
