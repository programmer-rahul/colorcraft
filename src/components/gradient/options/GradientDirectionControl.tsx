import { useGradient } from "../../../context/GradientContext";
import { Button } from "../../reusable/Button.tsx";
import { ArrowDown,
         ArrowDownLeft,
         ArrowDownRight,
         ArrowUp,
         ArrowUpRight,
         ArrowUpLeft,
         ArrowLeft,
         ArrowRight} from "@phosphor-icons/react";

const GradientDirectionControl = () => {
    const { gradientOptions, setGradientOptions } = useGradient();
    const dirctionIcon = [
        {angle: 45,icon: <ArrowUpRight size={32} weight="bold" />},
        {angle: 90,icon: <ArrowRight size={32} weight="bold" />},
        {angle: 135,icon: <ArrowDownRight size={32} weight="bold" />},
        {angle: 180,icon: <ArrowDown size={32} weight="bold" />},
        {angle: 225,icon: <ArrowDownLeft size={32} weight="bold" />},
        {angle: 270,icon: <ArrowLeft size={32} weight="bold" />},
        {angle: 315,icon: <ArrowUpLeft size={32} weight="bold" />},
        {angle: 360,icon: <ArrowUp size={32} weight="bold" />}];
    

  return (
      <div className="gradient-direction w-full border-b-2 bg-gray-700 p-2 dark:border-slate-200 lg:w-96 xl:w-64">
          <p className="pb-2 text-center xl:text-start xl:font-semibold">
              Direction
          </p>
          <div className="grid grid-cols-4 gap-2">
              {dirctionIcon.map((item, index) => {
                  
                  return(<Button
                             modifier="plain"
                             btnType="icon"
                             active={gradientOptions.angle === item.angle}
                             onClick={()=>{
                                 setGradientOptions(
                                     {...gradientOptions,
                                      angle: Number(item.angle)
                             })} }
                             key={index}
                         >{item.icon}</Button>)
              } 
              )}
          </div>
      </div>
  );
};
export default GradientDirectionControl;
