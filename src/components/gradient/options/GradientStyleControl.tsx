import { useGradient } from "../../../context/GradientContext";
import { Button } from "../../reusable/Button.tsx";

const GradientStyleControl = () => {
    const { gradientOptions, setGradientOptions } = useGradient();

    return (
        <div className="gradient-style p-2 w-full border-b-2 lg:w-96 xl:w-64 bg-gray-700">
            <p className="text-center pb-2 xl:text-start xl:font-semibold">Style</p>
            <div className="flex gap-4 place-content-center">  
                <Button
                    size="sm"
                    variant="primary"
                    active={gradientOptions.style === "linear" }
                    onClick={() => {
                        setGradientOptions({
                            ...gradientOptions,
                            style: "linear",
                        });
                    }}
                >linear</Button>
                <Button
                    size="sm"
                    variant="primary"
                    active={gradientOptions.style === "radial" }
                    onClick={() => {
                        setGradientOptions({
                            ...gradientOptions,
                            style: "radial",
                        });
                    }}
                >Radial</Button>

            </div>
        </div>
    );
};
export default GradientStyleControl;
