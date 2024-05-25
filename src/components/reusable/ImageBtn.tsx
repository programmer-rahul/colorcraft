interface BtnProps {
  type: "primary" | "secondary";
  text: string;
  clickHandler?: () => void;
  imgSrc?: string;
  style?: string;
}

const ImageBtn = ({ type, imgSrc, clickHandler, text, style }: BtnProps) => {
  return (
    <div
      className={`px-2 py-1 border font-semibold flex gap-2 rounded-md cursor-pointer items-center  transition-all capitalize ${style} ${type === "primary"
        ? "border-sky-500 text-sky-500 hover:bg-sky-900"
        : "border-orange-500 text-orange-500 hover:bg-orange-900"
        }`}
      onClick={clickHandler}
    >
      <img src={imgSrc} alt="random" width={20} />
      <p>{text}</p>
    </div>
  );
};
export default ImageBtn;
