import { useGradient } from "../../../context/GradientContext";

const ExportGradient = () => {
  const {
    downloadImageDimentions,
    setDownloadImageDimentions,
    gradientOptions,
  } = useGradient();

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
  );
};
export default ExportGradient;
