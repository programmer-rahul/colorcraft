import { useGradient } from "../../../context/GradientContext";

const GradientStyleControl = () => {
  const { gradientOptions, setGradientOptions } = useGradient();

  return (
    <div className="gradient-style p-2 w-full border-b border-slate-700 lg:w-96 xl:w-64">
      <p className="text-center pb-2 xl:text-start xl:font-semibold">Style</p>
      <div className="flex gap-4 place-content-center">
        <button
          onClick={() => {
            setGradientOptions({
              ...gradientOptions,
              style: "linear",
            });
          }}
          className={`px-2 py-1 border border-slate-700 rounded-md ${
            gradientOptions.style === "linear" &&
            "bg-sky-500 text-white font-semibold border-sky-500"
          }`}
        >
          Linear
        </button>
        <button
          onClick={() => {
            setGradientOptions({
              ...gradientOptions,
              style: "radial",
            });
          }}
          className={`px-2 py-1 border border-slate-700 rounded-md ${
            gradientOptions.style === "radial" &&
            "bg-sky-500 text-white font-semibold border-sky-500"
          }`}
        >
          Radial
        </button>
      </div>
    </div>
  );
};
export default GradientStyleControl;
