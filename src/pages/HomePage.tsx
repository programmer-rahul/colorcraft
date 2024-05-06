import { useEffect } from "react";
import ColorBox from "../components/gradient/ColorBox";
import { useGradient } from "../context/GradientContext";
import { getHexCode } from "../utils/helper";

const HomePage = () => {
  const { gradientOptions, setGradientOptions } = useGradient();

  const directionAngles = [45, 90, 135, 180, 225, 270, 315, 360];

  const handleDirectionChange = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    if (event.currentTarget.alt === String(gradientOptions.angle)) return;

    setGradientOptions({
      ...gradientOptions,
      angle: Number(event.currentTarget.alt),
    });
  };

  const generateRandomColors = () => {
    gradientOptions.colors[0] = getHexCode();
    gradientOptions.colors[1] = getHexCode();

    setGradientOptions({ ...gradientOptions });
  };

  const generateRandomGradient = () => {
    gradientOptions.angle = directionAngles[Math.floor(Math.random() * 7)];
    gradientOptions.style = Math.floor(Math.random() * 2) ? "linear" : "radial";
    gradientOptions.colors[0] = getHexCode();
    gradientOptions.colors[1] = getHexCode();
    setGradientOptions({ ...gradientOptions });
  };

  useEffect(() => {}, [gradientOptions]);

  return (
    <main>
      <div className="flex flex-col min-h-screen">
        <header className="px-4 py-2">
          <div>
            <h1 className="text-2xl text-sky-900 font-bold">Color Craft</h1>
          </div>
        </header>
        <div className="flex-1 main border-2 border-blue-600 p-2">
          <div className="text-xl text-center py-2 font-semibold">
            <p>Generate Css Gradient</p>
          </div>

          <div className="flex flex-col gap-2">
            <div
              className="gradient-preview w-full bg-rose-500 h-60"
              style={{
                background: `${gradientOptions.style}-gradient(${
                  gradientOptions.style === "linear"
                    ? `${gradientOptions.angle}deg`
                    : "circle"
                }, ${gradientOptions.colors[0]},${gradientOptions.colors[1]})`,
              }}
            ></div>
            <div className="gradient-controls flex flex-col gap-2">
              {/* color selectors  */}
              <div className="color-codes border-b border-slate-700 w-full p-2">
                <p className="text-center pb-2">Colors</p>

                <div className="flex justify-between items-center">
                  <ColorBox id={0} />

                  <div
                    className="random-colors cursor-pointer"
                    onClick={generateRandomColors}
                  >
                    <img src="random.svg" alt="random" width={20} />
                  </div>

                  <ColorBox id={1} />
                </div>
              </div>

              {/* direction options  */}
              <div className="gradient-direction border-b border-slate-700 w-full p-2">
                <p className="text-center pb-2">Direction</p>
                <div className="flex justify-around mk-cursor">
                  {directionAngles.map((_, index) => {
                    return (
                      <img
                        src="arrow.svg"
                        alt={String(_)}
                        width={30}
                        key={index}
                        style={{ rotate: `${_}deg` }}
                        className={`${
                          gradientOptions.angle === _ &&
                          "border-2 rounded-full border-slate-700"
                        }`}
                        onClick={handleDirectionChange}
                      />
                    );
                  })}
                </div>
              </div>

              {/* style  */}
              <div className="gradient-style p-2 w-full border-b border-slate-700">
                <p className="text-center pb-2">Style</p>
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

              <div className="flex gap-4 place-content-center py-4">
                <div
                  className="px-2 py-1 border border-slate-700 flex gap-2 rounded-md cursor-pointer"
                  onClick={generateRandomGradient}
                >
                  <img src="random.svg" alt="random" width={20} />
                  <p>Random</p>
                </div>
                <div className="px-2 py-1 border border-slate-700 flex gap-2 rounded-md cursor-pointer">
                  <img src="copy.svg" alt="copy" width={25} />
                  <p>Copy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default HomePage;
