import toast from "react-hot-toast";
import { useGradient } from "../../../context/GradientContext";
import { DIRECTION_ANGLES } from "../../../utils/constants";
import { getHexCode } from "../../../utils/helper";
import { Button } from "../../reusable/Button";
import Tooltip from "../../tippyjs/Tippy";
import { DiceFive, Copy } from "@phosphor-icons/react";

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
    <div className="flex place-content-center gap-4 bg-gray-700 py-4  dark:border-b-2 dark:border-slate-200 lg:w-96 xl:absolute xl:bottom-0 xl:w-64">
      <Tooltip content="Generate random gradient">
        <Button
          btnType="icon"
          variant="primary"
          onClick={generateRandomGradient}
        >
          <DiceFive size={32} weight="bold" />
        </Button>
      </Tooltip>
      <Button
        btnType="icon"
        variant="secondary"
        modifier="outline"
        onClick={copyGradientCss}
      >
        <Copy size={32} weight="bold" />
      </Button>
    </div>
  );
};
export default CopyCssControl;
