import { useGradient } from "../../context/GradientContext";

const ColorBox = ({ id }: { id: number }) => {
  const { gradientOptions, setGradientOptions } = useGradient();

  return (
    <div className="flex gap-2 items-center">
      <input
        type="color"
        className="color-box w-10 h-10 border border-black"
        value={gradientOptions.colors[id]}
        onChange={(e) => {
          gradientOptions.colors[id] = e.target.value;
          setGradientOptions({
            ...gradientOptions,
          });
        }}
      />
      <input
        type="text"
        value={gradientOptions.colors[id]}
        className="w-20 outline-none"
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
