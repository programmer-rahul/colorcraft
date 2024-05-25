import { useGradient } from "../../../context/GradientContext";
import Tooltip from "../../tippyjs/Tippy";

const ColorBox = ({ id }: { id: number }) => {
  const { gradientOptions, setGradientOptions } = useGradient();

  return (
    <div className="flex gap-2 items-center">
      <Tooltip content="Select a color">
        <input
          type="color"
          className="color-box w-10 h-10"
          value={gradientOptions.colors[id]}
          onChange={(e) => {
            gradientOptions.colors[id] = e.target.value;
            setGradientOptions({
              ...gradientOptions,
            });
          }}
        />
      </Tooltip >
      <input
        type="text"
        value={gradientOptions.colors[id]}
        className="w-20 outline-none bg-transparent"
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
