import { useGradient } from "../../../context/GradientContext";
import { DIRECTION_ANGLES } from "../../../utils/constants";

const GradientDirectionControl = () => {
  const { gradientOptions, setGradientOptions } = useGradient();

  const handleDirectionChange = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    if (event.currentTarget.alt === String(gradientOptions.angle)) return;

    setGradientOptions({
      ...gradientOptions,
      angle: Number(event.currentTarget.alt),
    });
  };

  return (
    <div className="gradient-direction border-b border-slate-700 w-full p-2 lg:w-96 xl:w-64">
      <p className="text-center pb-2 xl:text-start xl:font-semibold">
        Direction
      </p>
      <div className="flex justify-around mk-cursor xl:flex-wrap xl:gap-x-7">
        {DIRECTION_ANGLES.map((_, index) => {
          return (
            <img
              src="arrow.svg"
              alt={String(_)}
              width={30}
              key={index}
              style={{ rotate: `${_}deg` }}
              className={`${
                gradientOptions.angle === _ &&
                "border-2 rounded-full border-slate-700"
              }`}
              onClick={handleDirectionChange}
            />
          );
        })}
      </div>
    </div>
  );
};
export default GradientDirectionControl;
