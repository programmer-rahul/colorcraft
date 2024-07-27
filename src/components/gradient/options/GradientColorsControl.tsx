import { useGradient } from "../../../context/GradientContext";
import { getHexCode } from "../../../utils/helper";
import Tooltip from "../../tippyjs/Tippy";
import ColorBox from "../reusable/ColorBox";
import { Button } from "../../reusable/Button.tsx";
import { ArrowsClockwise } from "@phosphor-icons/react";

const GradientColorsControl = () => {
  const { gradientOptions, setGradientOptions } = useGradient();

  const generateRandomColors = () => {
    gradientOptions.colors[0] = getHexCode();
    gradientOptions.colors[1] = getHexCode();

    setGradientOptions({ ...gradientOptions });
  };

  return (
    <div className="color-codes w-full border-b-2 bg-gray-700 p-2 dark:border-slate-200 lg:w-96 xl:w-64">
      <p className="pb-2 text-center xl:text-start xl:font-semibold">Colors</p>

      <div className="flex items-center justify-between xl:flex-col xl:items-start">
        <ColorBox id={0} />

        <Tooltip content="Generate random colors">
          <div className="ml-auto pr-8">
            <Button
              btnType="icon"
              modifier="plain"
              onClick={generateRandomColors}
            >
              <ArrowsClockwise size={32} weight="bold" />
            </Button>
          </div>
        </Tooltip>

        <ColorBox id={1} />
      </div>
    </div>
  );
};
export default GradientColorsControl;

// like in this example is there any class by using that what color i add in this parent div it will not effect parent but add that class to child elements
<div className="">
  <p></p>
  <p></p>
</div>;
