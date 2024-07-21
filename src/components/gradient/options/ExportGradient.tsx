import { useGradient } from "../../../context/GradientContext";
import {Button} from "../../reusable/Button";
import Dropdown from "../../reusable/Dropdown";
import { useState } from "react";
import { Export } from "@phosphor-icons/react"

const ExportGradient = () => {
  const {
    downloadImageDimentions,
    setDownloadImageDimentions,
    gradientOptions,
  } = useGradient();

  const [imageFormat, setImageFormat] = useState("PNG");

  const exportGradientHandler = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    canvas.width = downloadImageDimentions.width;
    canvas.height = downloadImageDimentions.height;

    const newGradient = {
      angle: gradientOptions.angle,
      colors: [...gradientOptions.colors],
    };

    const radian = (newGradient.angle * Math.PI) / 360;

    const xWidth = Math.abs(Math.cos(radian)) * canvas.width;
    const xHeight = Math.abs(Math.sin(radian)) * canvas.height;

    const gradient = ctx.createLinearGradient(0, 0, xWidth, xHeight);

    gradient.addColorStop(0, newGradient.colors[0]);
    gradient.addColorStop(1, newGradient.colors[1]);

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let image;
    let extension;

    switch (imageFormat) {
      case "JPEG":
        image = canvas.toDataURL("image/jpeg");
        extension = "jpeg";
        break;
      case "BMP":
      case "ICO":
      case "TIFF":
      case "JFIF":
        alert(`${imageFormat} format not supported in canvas export.`);
        return;
      case "PNG":
      default:
        image = canvas.toDataURL("image/png");
        extension = "png";
        break;
    }

    const link = document.createElement("a");
    link.href = image;
    link.download = `colorcraft-gradient.${extension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

          <Dropdown
              title="Select Format"
              items={["PNG", "JPEG"]}
              clickHandler={(item) => setImageFormat(item)}
              style="w-full mt-4"
              updateWithSelectedItem={true}
              maxHeight="6rem"
          />
          <Button
              className="mt-8"
              variant="secondary"
              modifier="outline"
              onClick={exportGradientHandler}
          >
              <Export size={32} weight="bold" />
              <span>{"export"}</span>
          </Button>
      </div>
  );
};

export default ExportGradient;
