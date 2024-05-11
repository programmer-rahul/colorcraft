import { useGradient } from "../../context/GradientContext";
import toast from "react-hot-toast";
import { getHexCode } from "../../utils/helper";
import ColorBox from "./ColorBox";

const GradientControls = () => {
  const {
    gradientOptions,
    setGradientOptions,
    downloadImageDimentions,
    setDownloadImageDimentions,
  } = useGradient();

  const currentGradient = `${gradientOptions.style}-gradient(${
    gradientOptions.style === "linear"
      ? `${gradientOptions.angle}deg`
      : "circle"
  }, ${gradientOptions.colors[0]},${gradientOptions.colors[1]})`;

  const directionAngles = [45, 90, 135, 180, 225, 270, 315, 360];

  const generateRandomColors = () => {
    gradientOptions.colors[0] = getHexCode();
    gradientOptions.colors[1] = getHexCode();

    setGradientOptions({ ...gradientOptions });
  };

  const handleDirectionChange = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    if (event.currentTarget.alt === String(gradientOptions.angle)) return;

    setGradientOptions({
      ...gradientOptions,
      angle: Number(event.currentTarget.alt),
    });
  };

  const generateRandomGradient = () => {
    gradientOptions.angle = directionAngles[Math.floor(Math.random() * 7)];
    gradientOptions.style = Math.floor(Math.random() * 2) ? "linear" : "radial";
    gradientOptions.colors[0] = getHexCode();
    gradientOptions.colors[1] = getHexCode();
    setGradientOptions({ ...gradientOptions });
  };

  const copyGradientCss = () => {
    if (!navigator.clipboard)
      return toast.error("Your browser does't support clipboard copy");
    navigator.clipboard
      .writeText("background : " + currentGradient)
      .then(() => {
        toast.success("Gradient copied to clipboard");
      });
  };

  const exportGradientHandler = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    canvas.width = downloadImageDimentions.width;
    canvas.height = downloadImageDimentions.height;

    const newGredient = {
      angle: gradientOptions.angle,
      colors: [...gradientOptions.colors],
    };

    const radian = (newGredient.angle * Math.PI) / 360;

    const xWidth = Math.abs(Math.cos(radian)) * canvas.width;
    const xHeight = Math.abs(Math.sin(radian)) * canvas.height;

    console.log("xwidth", xWidth, xHeight);
    console.log("radiant", radian);

    const gradient = ctx.createLinearGradient(0, 0, xWidth, xHeight);

    gradient.addColorStop(0, newGredient.colors[0]);
    gradient.addColorStop(1, newGredient.colors[1]);

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // create downloadable image of gradient
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "colorcraft-gradient.png";
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="gradient-controls flex flex-col gap-2 lg:flex-row lg:flex-wrap lg:justify-around lg:gap-12 xl:flex-nowrap xl:flex-col xl:gap-2 xl:justify-start xl:py-1 xl:relative">
      {/* color selectors  */}
      <div className="color-codes border-b border-slate-700 w-full p-2 lg:w-96 xl:w-64">
        <p className="text-center pb-2 xl:text-start xl:font-semibold">
          Colors
        </p>

        <div className="flex justify-between items-center xl:flex-col xl:items-start">
          <ColorBox id={0} />

          <div
            className="random-colors cursor-pointer xl:self-end xl:px-14"
            onClick={generateRandomColors}
          >
            <img src="random.svg" alt="random" width={20} />
          </div>

          <ColorBox id={1} />
        </div>
      </div>

      {/* direction options  */}
      <div className="gradient-direction border-b border-slate-700 w-full p-2 lg:w-96 xl:w-64">
        <p className="text-center pb-2 xl:text-start xl:font-semibold">
          Direction
        </p>
        <div className="flex justify-around mk-cursor xl:flex-wrap xl:gap-x-7">
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

      {/* btns  */}
      <div className="flex gap-4 place-content-center py-4 lg:w-96 xl:w-64 xl:absolute xl:bottom-0">
        <div
          className="px-2 py-1 border border-slate-700 flex gap-2 rounded-md cursor-pointer items-center"
          onClick={generateRandomGradient}
        >
          <img src="random.svg" alt="random" width={20} />
          <p>Random</p>
        </div>
        <div
          className="px-2 py-1 border border-slate-700 flex gap-2 rounded-md cursor-pointer items-center"
          onClick={copyGradientCss}
        >
          <img src="copy.svg" alt="copy" width={25} />
          <p>Copy</p>
        </div>
      </div>

      <div className="p-2 w-full flex flex-col border-b border-slate-700 lg:w-96 xl:w-64">
        <p className="text-center pb-2 xl:text-start xl:font-semibold">
          Download Image
        </p>

        <div className="flex gap-2 w-full flex-col">
          <div className="width flex gap-1 w-full items-start">
            <span>Width :</span>
            <input
              type="number"
              className="p-1 border outline-none border-slate-700 rounded-sm w-2/5 h-6"
              value={downloadImageDimentions.width}
              onChange={(event) => {
                setDownloadImageDimentions((prev) => {
                  return { ...prev, width: Number(event.target.value) };
                });
              }}
            />
            <span>px</span>
          </div>
          <div className="height flex gap-1 w-full items-start">
            <span>Height :</span>
            <input
              type="number"
              className="p-1 border outline-none border-slate-700 rounded-sm w-2/5 h-6"
              value={downloadImageDimentions.height}
              onChange={(event) => {
                setDownloadImageDimentions((prev) => {
                  return { ...prev, height: Number(event.target.value) };
                });
              }}
            />
            <span>px</span>
          </div>
        </div>

        <div
          className="px-2 py-1 border border-slate-700 justify-center flex gap-2 rounded-md cursor-pointer items-center w-1/2 self-end mt-4"
          onClick={exportGradientHandler}
        >
          <img src="export.svg" alt="export" width={20} />
          <p>Export</p>
        </div>
      </div>
    </div>
  );
};
export default GradientControls;
