import toast from "react-hot-toast";
import { useGradient } from "../../../context/GradientContext";
import { DIRECTION_ANGLES } from "../../../utils/constants";
import { getHexCode } from "../../../utils/helper";
import ImageBtn from "../../reusable/ImageBtn";

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
    <div className="flex place-content-center gap-4 bg-gray-700 py-4 dark:border-b-2 dark:border-slate-200 lg:w-96 xl:absolute xl:bottom-0 xl:w-64">
      <ImageBtn
        type="primary"
        text="random"
        clickHandler={generateRandomGradient}
        imgSrc="random.svg"
      />
      <ImageBtn
        type="secondary"
        text="copy"
        clickHandler={copyGradientCss}
        imgSrc="copy.svg"
        style="pr-3"
      />
    </div>
  );
};
export default CopyCssControl;
