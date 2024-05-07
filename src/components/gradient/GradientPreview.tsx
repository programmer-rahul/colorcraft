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
      className="gradient-preview w-full h-60 rounded-md xl:h-auto xl:m-3"
      style={{
        background: currentGradient,
      }}
    ></div>
  );
};
export default GredientPreview;
