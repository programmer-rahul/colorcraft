import { useGradient } from "../../../context/GradientContext";
import ImageBtn from "../../reusable/ImageBtn";

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
    <div className="flex w-full flex-col border-b-2 bg-gray-700 p-2 dark:border-slate-200 lg:w-96 xl:w-64">
      <p className="pb-2 text-center xl:text-start xl:font-semibold">
        Download Image
      </p>

      <div className="flex w-full flex-col gap-2">
        <div className="width flex w-full items-start gap-1">
          <span>Width :</span>
          <input
            type="number"
            className="h-6 w-2/5 rounded-md p-1 text-slate-900 outline-none"
            value={downloadImageDimentions.width}
            onChange={(event) => {
              setDownloadImageDimentions((prev) => {
                return { ...prev, width: Number(event.target.value) };
              });
            }}
          />
          <span>px</span>
        </div>
        <div className="height flex w-full items-start gap-1">
          <span>Height :</span>
          <input
            type="number"
            className="h-6 w-2/5 rounded-md p-1 text-slate-900 outline-none"
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

      <ImageBtn
        type="secondary"
        text="export"
        clickHandler={exportGradientHandler}
        imgSrc="export.svg"
        style={"w-1/2 self-end mt-4 flex justify-center"}
      />
    </div>
  );
};
export default ExportGradient;
