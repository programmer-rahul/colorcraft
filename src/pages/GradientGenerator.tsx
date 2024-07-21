import { useEffect, useRef } from "react";
import GradientControls from "../components/gradient/GradientControls";
import GradientPreview from "../components/gradient/GradientPreview";
import Header from "../components/gradient/Header";
import { useGradient } from "../context/GradientContext";

const HomePage = () => {
  const { gradientOptions } = useGradient();

  const currentGradient = `${gradientOptions.style}-gradient(${
    gradientOptions.style === "linear"
      ? `${gradientOptions.angle}deg`
      : "circle"
  }, ${gradientOptions.colors[0]},${gradientOptions.colors[1]})`;

  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.style.backgroundClip = "text";
      textRef.current.style.color = "transparent";
    }
  }, [currentGradient]);

  return (
    <main>
      <div className="flex min-h-screen flex-col bg-slate-200 dark:bg-slate-900">
        <Header />
        <div className="main flex-1 p-2 xl:flex xl:flex-col">
          <div className="py-2 text-center text-xl font-semibold xl:text-4xl">
            <p
              ref={textRef}
              style={{
                background: `${currentGradient}`,
              }}
            >
              Generate Css Gradient
            </p>
          </div>

          <div className="flex flex-col gap-2 xl:flex-1 xl:flex-row">
            {/* preview  */}
            <GradientPreview />

            {/* controls  */}
            <GradientControls />
          </div>
        </div>
      </div>
    </main>
  );
};
export default HomePage;
