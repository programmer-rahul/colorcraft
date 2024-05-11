import { useGradient } from "../../../context/GradientContext";
import { getHexCode } from "../../../utils/helper";
import ColorBox from "../reusable/ColorBox";

const GradientColorsControl = () => {
  const { gradientOptions, setGradientOptions } = useGradient();

  const generateRandomColors = () => {
    gradientOptions.colors[0] = getHexCode();
    gradientOptions.colors[1] = getHexCode();

    setGradientOptions({ ...gradientOptions });
  };

  return (
    <div className="color-codes border-b border-slate-700 w-full p-2 lg:w-96 xl:w-64">
      <p className="text-center pb-2 xl:text-start xl:font-semibold">Colors</p>

      <div className="flex justify-between items-center xl:flex-col xl:items-start">
        <ColorBox id={0} />

        <div
          className="random-colors cursor-pointer xl:self-end xl:px-14"
          onClick={generateRandomColors}
        >
          <img src="random.svg" alt="random" width={20} />
        </div>

        <ColorBox id={1} />
      </div>
    </div>
  );
};
export default GradientColorsControl;
