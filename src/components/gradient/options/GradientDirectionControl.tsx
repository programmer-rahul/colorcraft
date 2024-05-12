import { useGradient } from "../../../context/GradientContext";
import { DIRECTION_ANGLES } from "../../../utils/constants";

const GradientDirectionControl = () => {
  const { gradientOptions, setGradientOptions } = useGradient();

  const handleDirectionChange = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>,
  ) => {
    if (event.currentTarget.ariaLabel === String(gradientOptions.angle)) return;

    setGradientOptions({
      ...gradientOptions,
      angle: Number(event.currentTarget.ariaLabel),
    });
  };

  return (
    <div className="gradient-direction w-full border-b-2 bg-gray-700 p-2 dark:border-slate-200 lg:w-96 xl:w-64">
      <p className="pb-2 text-center xl:text-start xl:font-semibold">
        Direction
      </p>
      <div className="mk-cursor flex justify-around xl:flex-wrap xl:gap-x-7">
        {DIRECTION_ANGLES.map((_, index) => {
          return (
            <svg
              width={30}
              onClick={handleDirectionChange}
              viewBox="0 0 24 24"
              aria-label={String(_)}
              key={index}
              style={{ rotate: `${_}deg` }}
              className={`${
                gradientOptions.angle === _ &&
                "rounded-full border-2 border-sky-600"
              }`}
            >
              <path
                d="M12 6V18M12 18L7 13M12 18L17 13"
                stroke="rgb(226 232 240)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          );
        })}
      </div>
    </div>
  );
};
export default GradientDirectionControl;
