import { useGradient } from "../../../context/GradientContext";
import Tooltip from "../../tippyjs/Tippy";

const ColorBox = ({ id }: { id: number }) => {
  const { gradientOptions, setGradientOptions } = useGradient();

  return (
    <div className="flex items-center gap-2">
      <Tooltip content="Select a color">
        <input
          type="color"
          className="color-box h-10 w-10"
          value={gradientOptions.colors[id]}
          onChange={(e) => {
            gradientOptions.colors[id] = e.target.value;
            setGradientOptions({
              ...gradientOptions,
            });
          }}
        />
      </Tooltip>
      <input
        type="text"
        value={gradientOptions.colors[id]}
        className="w-20 bg-transparent outline-none"
        onChange={(e) => {
          gradientOptions.colors[id] = e.target.value;
          setGradientOptions({
            ...gradientOptions,
          });
        }}
      />
    </div>
  );
};
export default ColorBox;
