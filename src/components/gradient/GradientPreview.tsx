import { useGradient } from "../../context/GradientContext";

const GredientPreview = () => {
  const { gradientOptions } = useGradient();

  const currentGradient = `${gradientOptions.style}-gradient(${
    gradientOptions.style === "linear"
      ? `${gradientOptions.angle}deg`
      : "circle"
  }, ${gradientOptions.colors[0]},${gradientOptions.colors[1]})`;

  return (
    <div
      className="gradient-preview h-60 w-full rounded-md xl:m-3 xl:h-auto"
      style={{
        background: currentGradient,
      }}
    ></div>
  );
};
export default GredientPreview;
