import ExportGradient from "./options/ExportGradient";
import GradientDirectionControl from "./options/GradientDirectionControl";
import GradientStyleControl from "./options/GradientStyleControl";
import CopyCssControl from "./options/CopyCssControl";
import GradientColorsControl from "./options/GradientColorsControl";

const GradientControls = () => {
  return (
    <div className="gradient-controls flex flex-col gap-2 text-white dark:text-slate-300 lg:flex-row lg:flex-wrap lg:justify-around lg:gap-12 xl:relative xl:mb-4 xl:mt-2 xl:flex-col xl:flex-nowrap xl:justify-start xl:gap-2 xl:py-1">
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
