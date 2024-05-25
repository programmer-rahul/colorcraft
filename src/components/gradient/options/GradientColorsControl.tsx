import { useGradient } from "../../../context/GradientContext";
import { getHexCode } from "../../../utils/helper";
import Tooltip from "../../tippyjs/Tippy";
import ColorBox from "../reusable/ColorBox";

const GradientColorsControl = () => {
  const { gradientOptions, setGradientOptions } = useGradient();

  const generateRandomColors = () => {
    gradientOptions.colors[0] = getHexCode();
    gradientOptions.colors[1] = getHexCode();

    setGradientOptions({ ...gradientOptions });
  };

  return (
    <div className="color-codes border-b-2 dark:border-slate-200 w-full p-2 lg:w-96 xl:w-64 bg-gray-700">
      <p className="text-center pb-2 xl:text-start xl:font-semibold">Colors</p>

      <div className="flex justify-between items-center xl:flex-col xl:items-start">

        <ColorBox id={0} />

        <Tooltip content="Generate random colors">
          <div
            className="random-colors cursor-pointer xl:self-end xl:px-14"
            onClick={generateRandomColors}
          >
            <svg fill="rgb(226 232 240)" width={20} viewBox="0 0 512 512">
              <path
                d="M447.1,86.2C400.3,33.4,332.2,0,256,0C114.6,0,0,114.6,0,256h64c0-106.1,85.9-192,192-192c58.5,0,110.4,26.5,145.5,67.8
	            L341.3,192H512V21.3L447.1,86.2z M256,448c-58.5,0-110.4-26.5-145.5-67.8l60.2-60.2H0v170.7l64.9-64.9
	            c46.8,52.8,115,86.2,191.1,86.2c141.4,0,256-114.6,256-256h-64C448,362.1,362.1,448,256,448z"
              />
            </svg>
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
