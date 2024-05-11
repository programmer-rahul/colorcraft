import ExportGradient from "./options/ExportGradient";
import GradientDirectionControl from "./options/GradientDirectionControl";
import GradientStyleControl from "./options/GradientStyleControl";
import CopyCssControl from "./options/CopyCssControl";
import GradientColorsControl from "./options/GradientColorsControl";

const GradientControls = () => {
  return (
    <div className="gradient-controls flex flex-col gap-2 lg:flex-row lg:flex-wrap lg:justify-around lg:gap-12 xl:flex-nowrap xl:flex-col xl:gap-2 xl:justify-start xl:py-1 xl:relative text-white">
      {/* color selectors  */}
      <GradientColorsControl />

      {/* direction options  */}
      <GradientDirectionControl />

      {/* style  */}
      <GradientStyleControl />

      {/* exporing image  */}
      <ExportGradient />

      {/* btns  */}
      <CopyCssControl />
    </div>
  );
};
export default GradientControls;
