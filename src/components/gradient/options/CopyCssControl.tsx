import toast from "react-hot-toast";
import { useGradient } from "../../../context/GradientContext";
import { DIRECTION_ANGLES } from "../../../utils/constants";
import { getHexCode } from "../../../utils/helper";

const CopyCssControl = () => {
  const { gradientOptions, setGradientOptions } = useGradient();

  const currentGradient = `${gradientOptions.style}-gradient(${
    gradientOptions.style === "linear"
      ? `${gradientOptions.angle}deg`
      : "circle"
  }, ${gradientOptions.colors[0]},${gradientOptions.colors[1]})`;

  const generateRandomGradient = () => {
    gradientOptions.angle = DIRECTION_ANGLES[Math.floor(Math.random() * 7)];
    gradientOptions.style = Math.floor(Math.random() * 2) ? "linear" : "radial";
    gradientOptions.colors[0] = getHexCode();
    gradientOptions.colors[1] = getHexCode();
    setGradientOptions({ ...gradientOptions });
  };

  const copyGradientCss = () => {
    if (!navigator.clipboard)
      return toast.error("Your browser does't support clipboard copy");
    navigator.clipboard
      .writeText("background : " + currentGradient)
      .then(() => {
        toast.success("Gradient copied to clipboard");
      });
  };

  return (
    <div className="flex gap-4 place-content-center py-4 lg:w-96 xl:w-64 xl:absolute xl:bottom-0">
      <div
        className="px-2 py-1 border border-slate-700 flex gap-2 rounded-md cursor-pointer items-center"
        onClick={generateRandomGradient}
      >
        <img src="random.svg" alt="random" width={20} />
        <p>Random</p>
      </div>
      <div
        className="px-2 py-1 border border-slate-700 flex gap-2 rounded-md cursor-pointer items-center"
        onClick={copyGradientCss}
      >
        <img src="copy.svg" alt="copy" width={25} />
        <p>Copy</p>
      </div>
    </div>
  );
};
export default CopyCssControl;
