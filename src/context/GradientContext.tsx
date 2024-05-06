import { createContext, ReactNode, useContext, useState } from "react";
import { getHexCode } from "../utils/helper";

interface GradientOptions {
  colors: string[];
  angle: number;
  style: "linear" | "radial";
}
type ContextTypes = {
  gradientOptions: GradientOptions;
  setGradientOptions: React.Dispatch<React.SetStateAction<GradientOptions>>;
};

export const GradientContext = createContext<ContextTypes>({
  gradientOptions: {
    colors: ["#9aaf19", "#87afa7"],
    angle: 45,
    style: "linear",
  },
  setGradientOptions: () => {},
});

export const GradientProvider = ({ children }: { children: ReactNode }) => {
  const [gradientOptions, setGradientOptions] = useState<GradientOptions>({
    colors: [getHexCode(), getHexCode()],
    angle: 45,
    style: "linear",
  });
  return (
    <GradientContext.Provider value={{ gradientOptions, setGradientOptions }}>
      {children}
    </GradientContext.Provider>
  );
};

export const useGradient = () => useContext(GradientContext);
