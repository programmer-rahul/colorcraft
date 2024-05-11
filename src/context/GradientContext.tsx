import { createContext, ReactNode, useContext, useState } from "react";
import { getHexCode } from "../utils/helper";

interface GradientOptions {
  colors: string[];
  angle: number;
  style: "linear" | "radial";
}
interface DownloadImageDimentions {
  width: number;
  height: number;
}
type ContextTypes = {
  gradientOptions: GradientOptions;
  setGradientOptions: React.Dispatch<React.SetStateAction<GradientOptions>>;

  downloadImageDimentions: DownloadImageDimentions;
  setDownloadImageDimentions: React.Dispatch<
    React.SetStateAction<DownloadImageDimentions>
  >;
};

export const GradientContext = createContext<ContextTypes>({
  gradientOptions: {
    colors: ["#9aaf19", "#87afa7"],
    angle: 45,
    style: "linear",
  },
  setGradientOptions: () => {},

  downloadImageDimentions: { width: 1980, height: 1080 },
  setDownloadImageDimentions: () => {},
});

export const GradientProvider = ({ children }: { children: ReactNode }) => {
  const [gradientOptions, setGradientOptions] = useState<GradientOptions>({
    colors: [getHexCode(), getHexCode()],
    angle: 45,
    style: "linear",
  });

  const [downloadImageDimentions, setDownloadImageDimentions] =
    useState<DownloadImageDimentions>({
      width: 1980,
      height: 1080,
    });

  return (
    <GradientContext.Provider
      value={{
        gradientOptions,
        setGradientOptions,
        downloadImageDimentions,
        setDownloadImageDimentions,
      }}
    >
      {children}
    </GradientContext.Provider>
  );
};

export const useGradient = () => useContext(GradientContext);
