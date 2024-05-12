import { useTheme } from "../../context/ThemeContext";
import { LocalStorage } from "../../utils/helper";

const Header = () => {
  const { currentTheme, setCurrentTheme } = useTheme();

  const handleThemeChange = () => {
    setCurrentTheme(currentTheme === "dark" ? "light" : "dark");
    LocalStorage.set("theme", currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="px-6 py-2">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-600 lg:text-3xl">
          Color Craft
        </h1>

        <div
          className="theme-changer cursor-pointer"
          onClick={handleThemeChange}
        >
          <img
            src={currentTheme === "dark" ? "theme/dark.svg" : "theme/light.svg"}
            alt="theme"
            width={40}
          />
        </div>
      </div>
    </header>
  );
};
export default Header;
