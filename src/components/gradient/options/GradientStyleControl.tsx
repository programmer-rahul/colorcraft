import { useGradient } from "../../../context/GradientContext";
import { Button } from "../../reusable/Button.tsx";

const GradientStyleControl = () => {
  const { gradientOptions, setGradientOptions } = useGradient();

  return (
    <div className="gradient-style w-full border-b-2 bg-gray-700 p-2 lg:w-96 xl:w-64">
      <p className="pb-2 text-center xl:text-start xl:font-semibold">Style</p>
      <div className="flex place-content-center gap-4">
        <Button
          size="sm"
          variant="primary"
          active={gradientOptions.style === "linear"}
          onClick={() => {
            setGradientOptions({
              ...gradientOptions,
              style: "linear",
            });
          }}
        >
          linear
        </Button>
        <Button
          size="sm"
          variant="primary"
          active={gradientOptions.style === "radial"}
          onClick={() => {
            setGradientOptions({
              ...gradientOptions,
              style: "radial",
            });
          }}
        >
          Radial
        </Button>
      </div>
    </div>
  );
};
export default GradientStyleControl;
